import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CameraType } from "expo-image-picker"

import { profileSchema, type ProfileFormData } from "./profile-schema"
import { buildImageUrl } from "@/shared/helpers/build-image-url"

import { useUserStore } from "@/shared/store/user-store"
import { useUpdateProfileMutation } from "@/shared/queries/profile/use-update-profile-mutation"
import { useUploadAvatarMutation } from "@/shared/queries/auth/use-upload-avatar-mutation"
import { useModal } from "@/shared/hooks/use-modal"
import { useModalStore } from "@/shared/store/modal-store"
import { useCartStore } from "@/shared/store/cart-store"
import { useImage } from "@/shared/hooks/use-image"

export const useProfileViewModel = () => {
  const { user, logout } = useUserStore()

  const { showSelection } = useModal()
  const { close: closeModal } = useModalStore()
  const { clearCart } = useCartStore()

  const updateProfileMutation = useUpdateProfileMutation()
  const uploadAvatarMutation = useUploadAvatarMutation()

  const { handleSelectImage } = useImage({
    callback: async (uri) => {
      if (!uri) {
        return
      }

      await uploadAvatarMutation.mutateAsync(uri)
    },
    cameraType: CameraType.front,
  })

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",
      password: "",
      newPassword: "",
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    await updateProfileMutation.mutateAsync({
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password ?? undefined,
      newPassword: data.newPassword ?? undefined,
    })
  })

  const handleLogout = () => {
    showSelection({
      title: "Sair",
      message: "Tem certeza que deseja sair?",
      options: [
        {
          variant: "danger",
          text: "Sim",
          onPress: () => {
            clearCart()
            logout()
            closeModal()
          },
        },
        {
          text: "Cancelar",
          onPress: closeModal,
        },
      ],
    })
  }

  return {
    avatarUri: buildImageUrl(user?.avatarUrl ?? ""),
    control,
    onSubmit,
    errors,
    isSubmitting,
    handleLogout,
    handleSelectImage,
  }
}
