import { z } from 'zod'

const walletAddressPattern = /^0x[a-f0-9]{40}$/

export const schema = z.array(
  z.object({
    entityAddress: z
      .string()
      .regex(
        walletAddressPattern,
        'Invalid wallet address. We only accept lowercased addresses.',
      ),
    githubUsername: z.string().min(1, 'GitHub username is required.'),
  }),
)
