export function randomPageNumber() {
  return Math.ceil(Math.random() * 604);
}

export async function fetchDataWithRetry(
  promises: Promise<any>[],
  maxRetries: number
): Promise<any[]> {
  try {
    const results = await Promise.all(promises);
    return results; // All promises succeeded
  } catch (error) {
    // Retry failed promises
    const retryPromises = promises.map((promise) => {
      return () =>
        promise.catch(() => fetchDataWithRetry([promise], maxRetries - 1));
    });

    const retryResults = await Promise.all(
      retryPromises.map((retry) => retry())
    );
    return retryResults; // Retry results (including successful retries)
  }
}
