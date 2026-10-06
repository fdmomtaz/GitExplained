export interface PullRequest {
    from: string; // 'chocolate', or 'Your fork' in lesson 11
    into: string; // 'main', or "Alex's Cookbook" in lesson 11
    open: boolean;
    comments: { author: string; text: string; approved?: boolean }[];
}
