export const getUid = (): string => Math.random().toString(36).slice(2);
export const isTest = (): boolean => {
  const url = window.location.href;
  return (
    url.includes('localhost')
  );
};
