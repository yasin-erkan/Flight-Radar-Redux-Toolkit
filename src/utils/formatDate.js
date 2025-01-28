// unix Time Format

const formatDate = (unix_time) => {
  if (!unix_time || unix_time === 0) return null;

  const formatted = new Date(unix_time * 1000);

  return formatted.toLocaleTimeString("en", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default formatDate;
