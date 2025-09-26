function distanceMeasure(lat_x: number, lon_x: number, lat_y: number, lon_y: number): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const R = 6371; 
  const dLat = toRad(lat_y - lat_x);
  const dLon = toRad(lon_y - lon_x);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat_x)) * Math.cos(toRad(lat_y)) *
    Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return Math.max(0, 300 - distance);
}

function overlapTime(start_x: Date, end_x: Date, start_y: Date, end_y: Date): number {
  const overlapStart = Math.max(start_x.getTime(), start_y.getTime());
  const overlapEnd = Math.min(end_x.getTime(), end_y.getTime());

  if (overlapStart >= overlapEnd) return 0;

  const overlapMinutes = Math.floor((overlapEnd - overlapStart) / (1000 * 60));
  return overlapMinutes * 3;
}

function tagSimilarScore(tag_x: string[], tag_y: string[]): number {
  const setX = new Set(tag_x.map(t => t.toLowerCase()));
  const setY = new Set(tag_y.map(t => t.toLowerCase()));

  let similarCount = 0;
  for (const tag of setX) {
    if (setY.has(tag)) similarCount++;
  }

  return similarCount * 50;
}

export type Post = {
    _id: string;            
    title: string;
    description: string;
    img: string;
    tags: string[];
    lat: number;           
    long: number;          
    start_time: Date;
    end_time: Date;
    slots: number;
    people: number;
    terminate: boolean;
};


function similarScore(currPost: Post, post: Post): number {
  const distance = distanceMeasure(currPost.lat, currPost.long, post.lat, post.long);
  const time = overlapTime(currPost.start_time, currPost.end_time, post.start_time, post.end_time);
  const tagScore = tagSimilarScore(currPost.tags, post.tags);
  return distance + time + tagScore;
}

export function calculateScore(currPost: Post, posts: Post[]): Post[] {
  const scores = posts.map(post => ({
    post: post,
    score: similarScore(currPost, post)
  }));

  scores.sort((a, b) => b.score - a.score); 

  return scores.slice(0, 5).map(s => s.post);
}
