<template>
  <section id="services">
    <article class="mt-5 mb-5">
      <div class="container">
        <div class="jumbotron jumbotron-fluid no-bg">
          <div class="container">
            <h2 class="display-4 text-center hack-section-heading">Services</h2>
            <p class="lead text-center hack-section-description">
              Blockchain Consulting, technical development for Initial Coin Offerings and
              Decentralized Applications, Public and Private Blockchain Development. We provide the
              best possible service using the latest and top-notch technology stack.
            </p>
          </div>
        </div>
      </div>
      <div class="hack-slider-section hack-slide-first">
        <div class="panel-last-child" data-index="0">
          <div
            class="fadeIn hack-slides container"
            style="visibility: visible; animation-duration: 1s; animation-iteration-count: 1; animation-name: fadeIn;"
          >
            <div class="row hack-slide-tabs">
              <button
                class="col-md-3 hack-slide-tab hack-slide1 hack-slide-tab-active"
                data-index="1"
              >
                Blockchain
                <br />Development
                <div class="hack-tab-underline1"></div>
              </button>
              <button class="col-md-3 hack-slide-tab hack-slide2" data-index="2">
                Smart Contracts
                <br />Development
                <div class="hack-tab-underline2"></div>
              </button>
              <button class="col-md-3 hack-slide-tab hack-slide3" data-index="3">
                Crowdsale
                <br />Services
                <div class="hack-tab-underline3"></div>
              </button>
              <button class="col-md-3 hack-slide-tab hack-slide4" data-index="4">
                Blockchain
                <br />Consulting
                <div class="hack-tab-underline4"></div>
              </button>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="hack-box-image">
                  <img :src="hackSvg" />
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="slider-container">
                  <div class="slider-wrapper">
                    <div class="slider-slide slider-slide-1 active-slide">
                      <h1>Private and Public Blockchain Development</h1>
                      <p>
                        Implement cryptography-based technologies to store immutable data. Public
                        shared ledgers like Ethereum and private blockchain networks according to
                        your business needs.
                      </p>
                      <a
                        class="btn btn-md btn-hack-learn"
                        href="/dlt-blockchain-development-services/blockchain-software-development/"
                      >Learn more ...</a>
                    </div>
                    <div class="slider-slide slider-slide-2">
                      <h1>Smart Contracts Development and Audit</h1>
                      <p>
                        We develop and audit smart contracts which are cost-saving, verifiable,
                        self-executable and auto-enforcing. If well implemented they can generate
                        savings due to speed of execution and reducing middlemen cost.
                      </p>
                      <a
                        class="btn btn-md btn-hack-learn"
                        href="<?php get_site_url() ?>/dlt-blockchain-development-services/smart-contracts-development/"
                      >Learn more ...</a>
                    </div>
                    <div class="slider-slide slider-slide-3">
                      <h1>Crowdsale Services</h1>
                      <p>
                        We offer our blockchain and smart contract development expertise building
                        the technical part of your ICOs/STOs to help you fundraise your business
                        endeavor.
                      </p>
                      <a
                        class="btn btn-md btn-hack-learn"
                        href="<?php get_site_url() ?>/dlt-blockchain-development-services/ico-initial-coin-offering/"
                      >Learn more ...</a>
                    </div>
                    <div class="slider-slide slider-slide-4">
                      <h1>Consulting</h1>
                      <p>
                        Our consulting services are helping projects define their decentralized
                        application or blockchain architecture, smart contracts utilization,
                        crystallize the use-case idea they have, and advise on the token economy
                        (tokenomy) behind their product.
                      </p>
                      <a
                        class="btn btn-md btn-hack-learn"
                        href="<?php get_site_url() ?>/dlt-blockchain-development-services/blockchain-consulting/"
                      >Learn more ...</a>
                    </div>
                  </div>

                  <div class="hack-dots">
                    <div class="hack-slider-dot" data-index="1"></div>
                    <div class="hack-slider-dot" data-index="2"></div>
                    <div class="hack-slider-dot" data-index="3"></div>
                    <div class="hack-slider-dot" data-index="4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import hackSvg from "./../../assets/hack.svg";
export default {
  data() {
    return { hackSvg };
  }
};
</script>
