export const options = {
  series: [
    {
      type: 'treemap',
      data: [
        {
          name: 'nodeA',
          value: 10,
          children: [
            {
              name: 'nodeAa',
              value: 4,
            },
            {
              name: 'nodeAb',
              value: 6,
            },
          ],
        },
        {
          name: 'nodeB',
          value: 20,
          children: [
            {
              name: 'nodeBa',
              value: 20,
              children: [
                {
                  name: 'nodeBa1',
                  value: 20,
                },
              ],
            },
          ],
        },
        {
          name: 'nodeC',
          value: 5,
          children: [
            {
              name: 'nodeCa',
              value: 2,
              children: [
                {
                  name: 'nodeCa1',
                  value: 3,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
