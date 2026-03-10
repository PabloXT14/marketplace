import { ProfileView } from "@/view-models/profile/profile-view"
import { useProfileViewModel } from "@/view-models/profile/use-profile-view-model"

export default function Profile() {
  const props = useProfileViewModel()

  return <ProfileView {...props} />
}
