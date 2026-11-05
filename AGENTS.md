# Architecture decisions

- Keep city-specific layout variations behind optional `CityMasterTemplate`/`SectorMasterTemplate` props whose absent defaults preserve existing pages; this isolates bespoke city work without forking the shared design system.- SectorMasterTemplate applies the redesigned style to canonicals starting with `/seo-para-` and `/seo-local-`; sector-only and city-only conversion banners are gated separately so each silo keeps its own copy.
