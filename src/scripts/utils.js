/**
 * Sort Astro Content posts in reverse chronological order (newest first)
 * Safe against missing data.
 */
export function sortPostsByDate(posts, { includeDrafts = false }= {}) {
    return [...posts]
    .filter(post => {
        if (!post?.data?.date) return false;
        if (!includeDrafts && post.data.draft) return false;
        return true;
      })
      
      .sort(
        (a, b) =>
          new Date(b.data.date).getTime() -
          new Date(a.data.date).getTime()
      );
  }
  
