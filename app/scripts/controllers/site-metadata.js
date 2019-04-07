class SiteMetadataController {

  constructor () {
    this._metadata = {}
  }

  getMetadata (originDomain) {
    return this._metadata[originDomain]
  }

  setMetadata (originDomain, metadata) {
    this._metadata[originDomain] = metadata
  }

  clearMetadata (originDomain) {
    delete this._metadata[originDomain]
  }

}

module.exports = SiteMetadataController
