import Joi from 'joi'

const walletAddressPattern = /^0x[a-fA-F0-9]{40}$/

export const schema = Joi.array().items(
  Joi.object({
    entityAddress: Joi.string().pattern(walletAddressPattern).required(),
    githubUsername: Joi.string().required(),
  }),
)
