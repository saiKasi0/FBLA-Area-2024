import { z } from "zod";
import { clerkClient } from '@clerk/nextjs/server';


import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const applicationRouter = createTRPCRouter({
	userExists: publicProcedure
	.input(z.object({username: z.string()}))
	.query(async ({ input }) => {

		const [user] = await clerkClient.users.getUserList({username: [input.username],});
    return (await clerkClient.users.getUserList()).toString().includes(input.username);
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
