import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const applicationRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ firstName: z.string(), middleName: z.string(), lastName: z.string(), email: z.string(), resumeLink: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.application.create({
        data: {
          firstName: input.firstName,
          middleName: input.middleName,
          lastName: input.lastName,
          email: input.email,
          resumeLink: input.resumeLink
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.application.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});
