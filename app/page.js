import Plans from "@/components/plans/Plans";
import ReviewSlider from "@/components/reviews/Reviews";
import Slide from "@/components/silder/Slide";

export default function Home() {
  return (
   <div className="space-y-10">
    <Slide/>
    <Plans/>
    <ReviewSlider/>
    </div>
  );
}
