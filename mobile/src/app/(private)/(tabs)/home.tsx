import { HomeView } from "@/view-models/home/home-view"

import { useHomeViewModel } from "@/view-models/home/use-home-view-model"

export default function Home() {
  const props = useHomeViewModel()

  return <HomeView {...props} />
}
