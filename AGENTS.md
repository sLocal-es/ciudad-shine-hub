# Architecture decisions

- Keep city-specific layout variations behind optional `CityMasterTemplate`/`SectorMasterTemplate` props whose absent defaults preserve existing pages; this isolates bespoke city work without forking the shared design system.