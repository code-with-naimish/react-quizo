export function underscoreCapitalise(str: string): string {
  const words = str?.split('_');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i]?.charAt(0)?.toUpperCase() + words[i]?.slice(1);
  }
  return words?.join(' ');
}