const completed = new Set([
  '0096','0098','0100','0101','0102','0104','0105','0106','0108','0109','0110','0116',
  '0118','0119','0120','0126','0127','0128','0129','0132','0133','0139','0144','0146','0148','0151'
]);

const structural = new Set(['0123','0125','0143','0145','0152']);

const PROJECT_NAMES = [
  '0091','0092','0093','0094','0095','0096','0097','0098','0100','0101','0102','0103',
  '0104','0105','0106','0107','0108','0109','0110','0111','0112','0113','0114','0115',
  '0116','0118','0119','0120','0122','0123','0124','0125','0126','0127','0128','0129',
  '0130','0131','0132','0133','0134','0135','0136','0137','0138','0139','0140','0141',
  '0143','0144','0145','0146','0147','0148','0149','0150','0151','0152'
];

export const PROJECTS = PROJECT_NAMES.map((id, index) => {
  const name = `IMG-20260929-WA${id}`;
  const category = structural.has(id)
    ? 'Structural work'
    : completed.has(id)
      ? 'Completed homes'
      : 'Construction progress';

  return {
    id,
    name,
    src: `/ngenaz/work/${name}.webp`,
    category,
    index: String(index + 1).padStart(2, '0'),
    tall: index % 7 === 0 || index % 11 === 0,
  };
});

export const PROJECT_CATEGORIES = ['All projects', 'Completed homes', 'Construction progress', 'Structural work'];
