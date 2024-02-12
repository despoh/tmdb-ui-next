import {
  getPopularMedia,
  getTrendingMedia,
} from "@/services/featuredContentService";
import { FeatureSectionData, FeaturedSectionType } from "@/types";

const featureSectionData: { [key: string]: FeatureSectionData } = {
  trending: {
    headingLabel: "Trending",
    getData: getTrendingMedia,
    selectorOptions: [
      {
        label: "Today",
        value: "day",
      },
      {
        label: "This Week",
        value: "week",
      },
    ],
  },
  popular: {
    headingLabel: "What's popular",
    getData: getPopularMedia,
    selectorOptions: [
      {
        label: "Movie",
        value: "movie",
      },
      {
        label: "TV",
        value: "tv",
      },
    ],
  },
};

export default featureSectionData;
