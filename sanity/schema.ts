import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      title: 'Coins',
      name: 'coins',
      type: 'document',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Symbol',
          name: 'symbol',
          type: 'string',
        },
        {
          title: 'Contract address',
          name: 'contractAddress',
          type: 'string',
        },
        {
          title: 'USD Price',
          name: 'usdPrice',
          type: 'string',
        },
        {
          title: 'Logo',
          name: 'logo',
          type: 'image',
        },
      ],
    },
  ],
}
