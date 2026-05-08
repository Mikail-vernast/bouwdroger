
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.LxWgrnBi.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.CmKrWol5.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.DMMs9bZK.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.Dlty-d0Z.js","/cdn/shopifycloud/checkout-web/assets/c1/phone-phoneCountryCode-legacy.DEZRzM7t.js","/cdn/shopifycloud/checkout-web/assets/c1/types-ModalOrigin-legacy.ZTtN2z-V.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useReplaceShopPayInHistory-legacy.Du3WOwDJ.js","/cdn/shopifycloud/checkout-web/assets/c1/purchasing-company-isValidPurchasingCompanyBillingAddress-legacy.BF12qqdU.js","/cdn/shopifycloud/checkout-web/assets/c1/extensibility-shared-legacy.D5vhrIEv.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound-legacy.Boa7S9Q2.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors-legacy.DrtxcfHP.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground-legacy.Zy9b5Bs2.js","/cdn/shopifycloud/checkout-web/assets/c1/events-shared-legacy.CLITQ76U.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.BbBFqdfu.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-nl-legacy.BZAkO7sg.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.Djp038On.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy.B1g7JOAL.js","/cdn/shopifycloud/checkout-web/assets/c1/CrossBorderConsolidation-legacy.Dc6JDft-.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSubscribeMessenger-legacy.0c1tuead.js","/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocation-legacy.CFSqoJRb.js","/cdn/shopifycloud/checkout-web/assets/c1/Page-legacy.CgmhvtuT.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons-legacy.C0uTbMJO.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed-legacy.CUYgZeHA.js","/cdn/shopifycloud/checkout-web/assets/c1/AmazonPayButton-legacy.BZNdcJNW.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad-legacy.7Hshih2h.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo-legacy.OkP_vnHN.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine-legacy.BOFB2tOM.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.D-KrNx2R.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo-legacy.C04UBFo0.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayNegotiationIntercept-helpers-legacy.RMVQywcC.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.DBGt9IRJ.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.DzSPyRrl.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress-legacy.CqY_cZso.js","/cdn/shopifycloud/checkout-web/assets/c1/paypal-express-usePayPalPaymentErrorHandler-legacy.zbhutile.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.DQZTOCwh.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.4lXUanAU.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.DurJqZnx.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.dEcMWbhq.js","/cdn/shopifycloud/checkout-web/assets/c1/OrderEditVaultedDelivery-legacy.Dk-vAgz-.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.CQjYlhwR.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayInstallmentsUkHoldoutExperiment-legacy.C0gwwgdt.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.B4kuYNWf.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-constants-legacy.DzoVncS_.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.DZIzmbKT.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.-NvfMtW5.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.BHcoaxUl.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.wLJKTf8U.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.fVPL04kK.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options-legacy.C2FB6Gv9.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.Cf-ueAxf.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.Dty6u19E.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0611/4358/0889/files/Tekengebied_3_018bdf8e-37b3-4ce9-86b2-ed593792ed8d_x320.png?v=1670534016","https://cdn.shopify.com/s/files/1/0611/4358/0889/files/Tekengebied_2-100_0769abc4-3d3a-4476-b2d2-ba3f9440f34a_2000x.jpg?v=1666719848"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  