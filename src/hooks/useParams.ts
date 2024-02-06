export class PageParamsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PageParamsError";
  }
}

export const useParams = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  /**
   * Pubkey example: 302a300506032b65700321003b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29
   */
  const pubkey = urlParams.get("pubkey");
  const redirect_uri = urlParams.get("redirect_uri");

  if (!pubkey || !redirect_uri) throw new PageParamsError("Missing params");

  return {
    pubkey,
    redirect_uri,
  };
};
