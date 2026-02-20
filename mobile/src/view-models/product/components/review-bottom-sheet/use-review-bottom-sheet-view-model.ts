import { useEffect, useState } from "react"

import { useGetUserCommentQuery } from "@/shared/queries/comment/use-get-user-comment-query"

type UseReviewBottomSheetViewModel = {
  productId: number
}

type RatingForm = {
  rating: number
  comment: string
  isEditing: boolean
}

const INITIAL_RATING_FORM_VALUES: RatingForm = {
  rating: 0,
  comment: "",
  isEditing: false,
}

export const useReviewBottomSheetViewModel = ({
  productId,
}: UseReviewBottomSheetViewModel) => {
  const [ratingForm, setRatingForm] = useState<RatingForm>(
    INITIAL_RATING_FORM_VALUES
  )

  const { data: userComment, isLoading: userCommentLoading } =
    useGetUserCommentQuery({ productId })

  const handleRatingChange = (rating: number) => {
    setRatingForm((prev) => ({ ...prev, rating }))
  }

  const handleCommentChange = (comment: string) => {
    setRatingForm((prev) => ({ ...prev, comment }))
  }

  useEffect(() => {
    if (userComment?.content && userComment?.rating) {
      setRatingForm({
        rating: userComment.rating,
        comment: userComment.content,
        isEditing: true,
      })
    }
  }, [userComment])

  return {
    ratingForm,
    userCommentLoading,
    handleRatingChange,
    handleCommentChange,
  }
}
