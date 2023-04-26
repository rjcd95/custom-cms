const getExcerpt = (text, maxLength = 200) => {
    if (text.length <= maxLength) {
      return text;
    }
    const excerpt = text.slice(0, maxLength).trim();
    const lastSpaceIndex = excerpt.lastIndexOf(" ");
    if (lastSpaceIndex > -1) {
      excerpt.slice(0, lastSpaceIndex);
    }
    return excerpt + "...";
}

export default getExcerpt;
