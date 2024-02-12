export const formatCurrency = (amount: number | undefined | null) => {
  if (!amount) {
    return undefined;
  }

  const formmatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formmatter.format(amount);
};

export const convertLanguage = (languageCode: string | undefined | null) => {
  if (!languageCode) {
    return undefined;
  }

  const converter = new Intl.DisplayNames(["en"], {
    type: "language",
  });

  return converter.of(languageCode);
};

export const formatTime = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours > 0 ? `${hours}h` : ""}${minutes > 0 ? ` ${minutes}m` : ""}`;
};

export const getApiBaseUrl = () => {
  if(process.env.NODE_ENV === "development"){
    "http://localhost:4000";
  }

  return "https://tmdb.despoh.com/api";
}