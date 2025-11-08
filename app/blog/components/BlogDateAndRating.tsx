import Reveal from "../../components/Reveal";
import StarRating from "./StarRating";

interface BlogDateAndRatingProps {
  datePublished: string;
  datePublishedFormatted: string;
  averageScore?: number;
  totalVotes?: number;
}

export default function BlogDateAndRating({
  datePublished,
  datePublishedFormatted,
  averageScore = 4.5,
  totalVotes = 0,
}: BlogDateAndRatingProps) {
  return (
    <Reveal>
      <div className="mt-12 pt-8 border-t border-gray-800 space-y-6">
        <p className="text-gray-400 text-sm md:text-base">
          Opublikowano: <time dateTime={datePublished}>{datePublishedFormatted}</time>
        </p>
        <StarRating averageScore={averageScore} totalVotes={totalVotes} />
      </div>
    </Reveal>
  );
}

