export const getPerformerLink = (performer) => {
  const performerMapping = {
    'Susanne Hvinden Hals': '/susanne-hvinden-hals',
    'Nils Georg Nilsen': '/nils-georg-nilsen',
    'Kathrine Hvinden Hals': '/kathrine-hvinden-hals',
    'Jan-Tore Saltnes': '/jan-tore-saltnes',
  };

  return performerMapping[performer] || '#';
};
