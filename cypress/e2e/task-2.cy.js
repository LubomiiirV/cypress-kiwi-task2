describe("empty spec", () => {
  it("passes", () => {
    cy.visit(
      "https://www.kiwi.com/sk/booking?activeStep=0&backToSearchUrl=https%3A%2F%2Fwww.kiwi.com%2Fsk%2Fhladaj%2Fresults%2Fbratislava-slovensko%2Fdublin-irsko%2F2022-09-29_2022-10-23%2F2-10%3FsortBy%3Dprice%26adults%3D2%26children%3D0%26infants%3D0&currency=eur&direct=true&flightsId=1e03125b4b510000f601b81f_0-125b1e034b55000077e43a90_0&handBags=null-null&holdBags=null-null&locale=sk&passengers=2&price=125&searchType=return&token=ED36sWJK1Vj8IlwAs91nVf-xx5Je2Q_LCUP5fHmlH7wa9fO35LlbQNBFrmwjTiPeJb6ecHnQWZAPd2RQIXYDbVPuBlkH1J0liKYQNnRomCy3pT_AmeANnELNhO2rsosNYTXXrE0HiDTfmhiZA4CmcBmyibg06Fi4sjT6vf7MEc3-eqnpYM8s4rIJkp2PXt2HxclTRJsCDI-s6MXpMQTvXzlzLjCsz6f0qaqxUg3BAA4aPYrFW7w1a2yUKBbMZ9NuHMS5qLM8eTm4V9CoautlDCiw0joMQJCoBV_InuRNeufhd2lVYFDictbWKqdFUH2FnaZfxaIBTahXEZg6Nxl6vk7LXnWy70q9aKZpy0ReHFGeymnrno1Q6z0zCBwnnJ8eZ3jamA7pWcOUgiFtEad8iIeJrlPM-HUh1fNz-v64p3LcRyPbRWKaP56xflKKqITNe_KwKqBhTODTDzju1pLTAtA%3D%3D"
    );
    cy.get('[data-test="CookiesPopup-Accept"]').click();
  });
});
