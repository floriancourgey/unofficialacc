---
layout: page
title: Contribute
---

<div class="h2">
    General process
</div>

- **Develop** locally with coding guidelines
- **Export** the XML package
- **Test** in Local, Preproduction & Production environments
- **Define** the Package listing
- **Send** all details to the Unofficial ACC Team

## Develop with coding guidelines & conventions

- Use the `unofficialacc` namespace
- For Javascript codes:
    - Never use the global JS namespace, create a dedicated object
    - Follow the [W3C Javascript coding guidelines](https://www.w3schools.com/js/js_conventions.asp)
    - Mandatory JSDoc tags: ex `@param env - the environment` `@returns arr` `@throws`
    - Optional JSDoc tags: ex `@since 1.0.1` `@see https://xxx`

## Export the XML package

- For the version, follow [semantic versioning](https://semver.org/): ex `0.8.2` for pre-release, `1.2.1` for production
- For the filename, follow `unofficialacc-name-version.xml`: ex `unofficialacc-mypackage-1.2.1.xml`

## Define the Unofficial ACC package listing

- Version changelog
- Short description
- Complete Markdown README with:
    - Pre-requisites
    - How to install
    - Package content
    - Screenshots
