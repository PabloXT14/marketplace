import { useEffect, useState } from "react"
import { toast } from "sonner-native"

import { useGetUserCommentQuery } from "@/shared/queries/comment/use-get-user-comment-query"
import { useCreateCommentMutation } from "@/shared/queries/comment/use-create-comment-mutation"
import { useUpdateUserCommentMutation } from "@/shared/queries/comment/use-update-user-comment-mutation"

type UseReviewBottomSheetViewModel = {
  productId: number
}

type RatingForm = {
  rating: number
  comment: string
  isEditing: boolean
  commentId?: number
}

const INITIAL_RATING_FORM_VALUES: RatingForm = {
  rating: 0,
  comment: "",
  isEditing: false,
  commentId: undefined,
}

export const useReviewBottomSheetViewModel = ({
  productId,
}: UseReviewBottomSheetViewModel) => {
  const [ratingForm, setRatingForm] = useState<RatingForm>(
    INITIAL_RATING_FORM_VALUES
  )

  const { data: userComment, isLoading: userCommentLoading } =
    useGetUserCommentQuery({ productId })
  const createCommentMutation = useCreateCommentMutation({ productId })
  const updateCommentMutation = useUpdateUserCommentMutation({ productId })

  const handleRatingChange = (rating: number) => {
    setRatingForm((prev) => ({ ...prev, rating }))
  }

  const handleCommentChange = (comment: string) => {
    setRatingForm((prev) => ({ ...prev, comment }))
  }

  const handleSubmit = async () => {
    if (ratingForm.rating === 0 || ratingForm.comment.trim() === "") {
      toast.warning(
        "Por favor, forneça uma nota e um comentário para sua avaliação."
      )

      return
    }

    if (ratingForm.isEditing) {
      await updateCommentMutation.mutateAsync({
        // biome-ignore lint/style/noNonNullAssertion: if isEditing is true, commentId will always be defined
        commentId: ratingForm.commentId!,
        rating: ratingForm.rating,
        content: ratingForm.comment,
      })
    } else {
      await createCommentMutation.mutateAsync({
        productId,
        rating: ratingForm.rating,
        content: ratingForm.comment,
      })
    }
  }

  useEffect(() => {
    if (userComment?.comment && userComment?.rating) {
      setRatingForm({
        isEditing: true,
        rating: userComment.rating,
        comment: userComment.comment.content,
        commentId: userComment.comment.id,
      })
    }
  }, [userComment])

  const isLoading =
    createCommentMutation.isPending || updateCommentMutation.isPending

  return {
    ratingForm,
    isLoading,
    userCommentLoading,
    handleRatingChange,
    handleCommentChange,
    handleSubmit,
  }
}
