export const isListed = ({ data }: { data: { draft?: boolean } }) =>
  import.meta.env.PROD ? !data.draft : true;
