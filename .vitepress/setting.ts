// typing --------------------------------------------------------------------

export interface SocialLink {
  icon: SocialLinkIcon;
  link: string;
}

export type SocialLinkIcon =
  | "discord"
  | "facebook"
  | "github"
  | "instagram"
  | "linkedin"
  | "mastodon"
  | "slack"
  | "twitter"
  | "youtube"
  | { svg: string };

// setting --------------------------------------------------------------------

export const github = "Your_github_repository_url";

export function createSocialLinks(): SocialLink[] {
  return [{ icon: "github", link: github }];
}

export function createAlgolia() {
  return {
    apiKey: "",
    indexName: "",
    appId: "",
    placeholder: "Keywords for search docs",
    translations: {
      button: {
        buttonText: "Search",
      },
    },
  };
}
