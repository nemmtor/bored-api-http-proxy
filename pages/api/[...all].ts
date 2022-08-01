import type { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

export default function proxy(req: NextApiRequest, res: NextApiResponse) {
  return httpProxyMiddleware(req, res, {
    target: "http://www.boredapi.com",
  });
}
