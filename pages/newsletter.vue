<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="mt-6">After Class Newsletter Creator</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <form class="form-floating">
          <div v-for="index in 8" :key="index">
            <label :for="'featured-event-' + index"
              >Featured Event {{ index }}:</label
            >
            <select
              :id="'featured-event-' + index"
              :name="'featured-event-' + index"
              class="form-select"
            >
              <option
                v-for="event in eventFeed.events"
                :key="event.id"
                :value="event.id"
              >
                {{ event.event.title }}
              </option>
              <!-- <EventCard v-for="event in eventFeed.events" :key="event.id" :event="event" /> -->
            </select>
          </div>
        </form>
      </div>

      <div class="col-lg-6">
        <!-- <iframe src="/newsletter-preview" width="100" height="100"> </iframe> -->
        <label :for="outputHTML">Copy/Paste HTML:</label>
        <textarea
          readonly
          rows="40"
          cols="50"
          id="outputHTML"
          class="form-control output-html"
          @click="$event.target.select()"
        >
    &lt;!doctype html&gt;
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:o=&quot;urn:schemas-microsoft-com:office:office&quot;&gt;

&lt;head&gt;
    &lt;!-- NAME: 1 COLUMN --&gt;
    &lt;!--[if gte mso 15]&gt;
        &lt;xml&gt;
            &lt;o:OfficeDocumentSettings&gt;
            &lt;o:AllowPNG/&gt;
            &lt;o:PixelsPerInch&gt;96&lt;/o:PixelsPerInch&gt;
            &lt;/o:OfficeDocumentSettings&gt;
        &lt;/xml&gt;
        &lt;![endif]--&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
    &lt;title&gt;New Newsletter | After Class | The University of Iowa&lt;/title&gt;
    &lt;style type=&quot;text/css&quot;&gt;
    p {
        margin: 10px 0;
        padding: 0;
    }

    table {
        border-collapse: collapse;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        display: block;
        margin: 0;
        padding: 0;
    }

    img,
    a img {
        border: 0;
        height: auto;
        outline: none;
        text-decoration: none;
    }

    body,
    #bodyTable,
    #bodyCell {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    .mcnPreviewText {
        display: none !important;
    }

    #outlook a {
        padding: 0;
    }

    img {
        -ms-interpolation-mode: bicubic;
    }

    table {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
    }

    .ReadMsgBody {
        width: 100%;
    }

    .ExternalClass {
        width: 100%;
    }

    p,
    a,
    li,
    td,
    blockquote {
        mso-line-height-rule: exactly;
    }

    a[href^=tel],
    a[href^=sms] {
        color: inherit;
        cursor: default;
        text-decoration: none;
    }

    p,
    a,
    li,
    td,
    body,
    table,
    blockquote {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass td,
    .ExternalClass div,
    .ExternalClass span,
    .ExternalClass font {
        line-height: 100%;
    }

    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }

    #bodyCell {
        padding: 10px;
    }

    .templateContainer {
        max-width: 600px !important;
    }

    a.mcnButton {
        display: block;
    }

    .mcnImage,
    .mcnRetinaImage {
        vertical-align: bottom;
    }

    .mcnTextContent {
        word-break: break-word;
    }

    .mcnTextContent img {
        height: auto !important;
    }

    .mcnDividerBlock {
        table-layout: fixed !important;
    }

    /*
    @tab Page
    @section Background Style
    @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
    */
    body,
    #bodyTable {
        /*@editable*/
        background-color: #010101;
    }

    /*
    @tab Page
    @section Background Style
    @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
    */
    #bodyCell {
        /*@editable*/
        border-top: 0;
    }

    /*
    @tab Page
    @section Email Border
    @tip Set the border for your email.
    */
    .templateContainer {
        /*@editable*/
        border: 0;
    }

    /*
    @tab Page
    @section Heading 1
    @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
    @style heading 1
    */
    h1 {
        /*@editable*/
        color: #ffffff;
        /*@editable*/
        font-family: Helvetica;
        /*@editable*/
        font-size: 26px;
        /*@editable*/
        font-style: normal;
        /*@editable*/
        font-weight: bold;
        /*@editable*/
        line-height: 125%;
        /*@editable*/
        letter-spacing: normal;
        /*@editable*/
        text-align: left;
    }

    /*
    @tab Page
    @section Heading 2
    @tip Set the styling for all second-level headings in your emails.
    @style heading 2
    */
    h2 {
        /*@editable*/
        color: #ffffff;
        /*@editable*/
        font-family: Helvetica;
        /*@editable*/
        font-size: 22px;
        /*@editable*/
        font-style: normal;
        /*@editable*/
        font-weight: bold;
        /*@editable*/
        line-height: 125%;
        /*@editable*/
        letter-spacing: normal;
        /*@editable*/
        text-align: left;
    }

    /*
    @tab Page
    @section Heading 3
    @tip Set the styling for all third-level headings in your emails.
    @style heading 3
    */
    h3 {
        /*@editable*/
        color: #ffffff;
        /*@editable*/
        font-family: Helvetica;
        /*@editable*/
        font-size: 20px;
        /*@editable*/
        font-style: normal;
        /*@editable*/
        font-weight: bold;
        /*@editable*/
        line-height: 125%;
        /*@editable*/
        letter-spacing: normal;
        /*@editable*/
        text-align: left;
    }

    /*
    @tab Page
    @section Heading 4
    @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
    @style heading 4
    */
    h4 {
        /*@editable*/
        color: #ffffff;
        /*@editable*/
        font-family: Helvetica;
        /*@editable*/
        font-size: 18px;
        /*@editable*/
        font-style: normal;
        /*@editable*/
        font-weight: bold;
        /*@editable*/
        line-height: 125%;
        /*@editable*/
        letter-spacing: normal;
        /*@editable*/
        text-align: left;
    }

    /*
    @tab Preheader
    @section Preheader Style
    @tip Set the background color and borders for your email's preheader area.
    */
    #templatePreheader {
        /*@editable*/
        background-color: #010101;
        /*@editable*/
        background-image: none;
        /*@editable*/
        background-repeat: no-repeat;
        /*@editable*/
        background-position: center;
        /*@editable*/
        background-size: cover;
        /*@editable*/
        border-top: 0;
        /*@editable*/
        border-bottom: 0;
        /*@editable*/
        padding-top: 0;
        /*@editable*/
        padding-bottom: 9px;
    }

    /*
    @tab Preheader
    @section Preheader Text
    @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
    */
    #templatePreheader .mcnTextContent,
    #templatePreheader .mcnTextContent p {
        /*@editable*/
        color: #ffffff;
        /*@editable*/
        font-family: Helvetica;
        /*@editable*/
        font-size: 12px;
        /*@editable*/
        line-height: 150%;
        /*@editable*/
        text-align: left;
    }

    /*
    @tab Preheader
    @section Preheader Link
    @tip Set the styling for your email's preheader links. Choose a color that helps them stand out from your text.
    */
    #templatePreheader .mcnTextContent a,
    #templatePreheader .mcnTextContent p a {
        /*@editable*/
        color: #fff;
        /*@editable*/
        font-weight: normal;
        /*@editable*/
        text-decoration: underline;
    }

    /*
    @tab Header
    @section Header Style
    @tip Set the background color and borders for your email's header area.
    */
    #templateHeader {
        /*@editable*/
        background-color: #010101;
        /*@editable*/
        background-image: none;
        /*@editable*/
        background-repeat: no-repeat;
        /*@editable*/
        background-position: center;
        /*@editable*/
        background-size: cover;
        /*@editable*/
        border-top: 0;
        /*@editable*/
        border-bottom: 0;
        /*@editable*/
        padding-top: 0;
        /*@editable*/
        padding-bottom: 0;
    }

    /*
    @tab Header
    @section Header Text
    @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
    */
    #templateHeader .mcnTextContent,
    #templateHeader .mcnTextContent p {
        /*@editable*/
        color: #202020;
        /*@editable*/
        font-family: Helvetica;
        /*@editable*/
        font-size: 16px;
        /*@editable*/
        line-height: 150%;
        /*@editable*/
        text-align: left;
    }

    /*
    @tab Header
    @section Header Link
    @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
    */
    #templateHeader .mcnTextContent a,
    #templateHeader .mcnTextContent p a {
        /*@editable*/
        color: #FFCD00;
        /*@editable*/
        font-weight: normal;
        /*@editable*/
        text-decoration: underline;
    }

    /*
    @tab Body
    @section Body Style
    @tip Set the background color and borders for your email's body area.
    */
    #templateBody {
        /*@editable*/
        background-color: #000;
        /*@editable*/
        background-image: none;
        /*@editable*/
        background-repeat: no-repeat;
        /*@editable*/
        background-position: center;
        /*@editable*/
        background-size: cover;
        /*@editable*/
        border-top: 0;
        /*@editable*/
        border-bottom: 2px solid #464646;
        /*@editable*/
        padding-top: 0;
        /*@editable*/
        padding-bottom: 9px;
    }

    /*
    @tab Body
    @section Body Text
    @tip Set the styling for your email's body text. Choose a size and color that is easy to read.
    */
    #templateBody .mcnTextContent,
    #templateBody .mcnTextContent p {
        /*@editable*/
        color: #ffffff;
        /*@editable*/
        font-family: Helvetica;
        /*@editable*/
        font-size: 16px;
        /*@editable*/
        line-height: 150%;
        /*@editable*/
        text-align: left;
    }

    /*
    @tab Body
    @section Body Link
    @tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
    */
    #templateBody .mcnTextContent a,
    #templateBody .mcnTextContent p a {
        /*@editable*/
        color: #FFCD00;
        /*@editable*/
        font-weight: normal;
        /*@editable*/
        text-decoration: underline;
    }

    /*
    @tab Footer
    @section Footer Style
    @tip Set the background color and borders for your email's footer area.
    */
    #templateFooter {
        /*@editable*/
        background-color: #000;
        /*@editable*/
        background-image: none;
        /*@editable*/
        background-repeat: no-repeat;
        /*@editable*/
        background-position: center;
        /*@editable*/
        background-size: cover;
        /*@editable*/
        border-top: 0;
        /*@editable*/
        border-bottom: 0;
        /*@editable*/
        padding-top: 9px;
        /*@editable*/
        padding-bottom: 9px;
    }

    /*
    @tab Footer
    @section Footer Text
    @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
    */
    #templateFooter .mcnTextContent,
    #templateFooter .mcnTextContent p {
        /*@editable*/
        color: #ffffff;
        /*@editable*/
        font-family: Helvetica;
        /*@editable*/
        font-size: 12px;
        /*@editable*/
        line-height: 150%;
        /*@editable*/
        text-align: center;
    }

    /*
    @tab Footer
    @section Footer Link
    @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
    */
    #templateFooter .mcnTextContent a,
    #templateFooter .mcnTextContent p a {
        /*@editable*/
        color: #fff;
        /*@editable*/
        font-weight: normal;
        /*@editable*/
        text-decoration: underline;
    }

    @media only screen and (min-width:768px) {
        .templateContainer {
            width: 600px !important;
        }

    }

    @media only screen and (max-width: 480px) {

        body,
        table,
        td,
        p,
        a,
        li,
        blockquote {
            -webkit-text-size-adjust: none !important;
        }

    }

    @media only screen and (max-width: 480px) {
        body {
            width: 100% !important;
            min-width: 100% !important;
        }

    }

    @media only screen and (max-width: 480px) {
        #bodyCell {
            padding-top: 10px !important;
        }

    }

    @media only screen and (max-width: 480px) {
        .mcnRetinaImage {
            max-width: 100% !important;
        }

    }

    @media only screen and (max-width: 480px) {
        .mcnImage {
            width: 100% !important;
        }

    }

    @media only screen and (max-width: 480px) {

        .mcnCartContainer,
        .mcnCaptionTopContent,
        .mcnRecContentContainer,
        .mcnCaptionBottomContent,
        .mcnTextContentContainer,
        .mcnBoxedTextContentContainer,
        .mcnImageGroupContentContainer,
        .mcnCaptionLeftTextContentContainer,
        .mcnCaptionRightTextContentContainer,
        .mcnCaptionLeftImageContentContainer,
        .mcnCaptionRightImageContentContainer,
        .mcnImageCardLeftTextContentContainer,
        .mcnImageCardRightTextContentContainer,
        .mcnImageCardLeftImageContentContainer,
        .mcnImageCardRightImageContentContainer {
            max-width: 100% !important;
            width: 100% !important;
        }

    }

    @media only screen and (max-width: 480px) {
        .mcnBoxedTextContentContainer {
            min-width: 100% !important;
        }

    }

    @media only screen and (max-width: 480px) {
        .mcnImageGroupContent {
            padding: 9px !important;
        }

    }

    @media only screen and (max-width: 480px) {

        .mcnCaptionLeftContentOuter .mcnTextContent,
        .mcnCaptionRightContentOuter .mcnTextContent {
            padding-top: 9px !important;
        }

    }

    @media only screen and (max-width: 480px) {

        .mcnImageCardTopImageContent,
        .mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,
        .mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent {
            padding-top: 18px !important;
        }

    }

    @media only screen and (max-width: 480px) {
        .mcnImageCardBottomImageContent {
            padding-bottom: 9px !important;
        }

    }

    @media only screen and (max-width: 480px) {
        .mcnImageGroupBlockInner {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }

    }

    @media only screen and (max-width: 480px) {
        .mcnImageGroupBlockOuter {
            padding-top: 9px !important;
            padding-bottom: 9px !important;
        }

    }

    @media only screen and (max-width: 480px) {

        .mcnTextContent,
        .mcnBoxedTextContentColumn {
            padding-right: 18px !important;
            padding-left: 18px !important;
        }

    }

    @media only screen and (max-width: 480px) {

        .mcnImageCardLeftImageContent,
        .mcnImageCardRightImageContent {
            padding-right: 18px !important;
            padding-bottom: 0 !important;
            padding-left: 18px !important;
        }

    }

    @media only screen and (max-width: 480px) {
        .mcpreview-image-uploader {
            display: none !important;
            width: 100% !important;
        }

    }

    @media only screen and (max-width: 480px) {

        /*
    @tab Mobile Styles
    @section Heading 1
    @tip Make the first-level headings larger in size for better readability on small screens.
    */
        h1 {
            /*@editable*/
            font-size: 22px !important;
            /*@editable*/
            line-height: 125% !important;
        }

    }

    @media only screen and (max-width: 480px) {

        /*
    @tab Mobile Styles
    @section Heading 2
    @tip Make the second-level headings larger in size for better readability on small screens.
    */
        h2 {
            /*@editable*/
            font-size: 20px !important;
            /*@editable*/
            line-height: 125% !important;
        }

    }

    @media only screen and (max-width: 480px) {

        /*
    @tab Mobile Styles
    @section Heading 3
    @tip Make the third-level headings larger in size for better readability on small screens.
    */
        h3 {
            /*@editable*/
            font-size: 18px !important;
            /*@editable*/
            line-height: 125% !important;
        }

    }

    @media only screen and (max-width: 480px) {

        /*
    @tab Mobile Styles
    @section Heading 4
    @tip Make the fourth-level headings larger in size for better readability on small screens.
    */
        h4 {
            /*@editable*/
            font-size: 16px !important;
            /*@editable*/
            line-height: 150% !important;
        }

    }

    @media only screen and (max-width: 480px) {

        /*
    @tab Mobile Styles
    @section Boxed Text
    @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
    */
        .mcnBoxedTextContentContainer .mcnTextContent,
        .mcnBoxedTextContentContainer .mcnTextContent p {
            /*@editable*/
            font-size: 14px !important;
            /*@editable*/
            line-height: 150% !important;
        }

    }

    @media only screen and (max-width: 480px) {

        /*
    @tab Mobile Styles
    @section Preheader Visibility
    @tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
    */
        #templatePreheader {
            /*@editable*/
            display: block !important;
        }

    }

    @media only screen and (max-width: 480px) {

        /*
    @tab Mobile Styles
    @section Preheader Text
    @tip Make the preheader text larger in size for better readability on small screens.
    */
        #templatePreheader .mcnTextContent,
        #templatePreheader .mcnTextContent p {
            /*@editable*/
            font-size: 14px !important;
            /*@editable*/
            line-height: 150% !important;
        }

    }

    @media only screen and (max-width: 480px) {

        /*
    @tab Mobile Styles
    @section Header Text
    @tip Make the header text larger in size for better readability on small screens.
    */
        #templateHeader .mcnTextContent,
        #templateHeader .mcnTextContent p {
            /*@editable*/
            font-size: 16px !important;
            /*@editable*/
            line-height: 150% !important;
        }

    }

    @media only screen and (max-width: 480px) {

        /*
    @tab Mobile Styles
    @section Body Text
    @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
    */
        #templateBody .mcnTextContent,
        #templateBody .mcnTextContent p {
            /*@editable*/
            font-size: 16px !important;
            /*@editable*/
            line-height: 150% !important;
        }

    }

    @media only screen and (max-width: 480px) {

        /*
    @tab Mobile Styles
    @section Footer Text
    @tip Make the footer content text larger in size for better readability on small screens.
    */
        #templateFooter .mcnTextContent,
        #templateFooter .mcnTextContent p {
            /*@editable*/
            font-size: 14px !important;
            /*@editable*/
            line-height: 150% !important;
        }

    }

    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;!--*|IF:MC_PREVIEW_TEXT|*--&gt;
    &lt;!--[if !gte mso 9]&gt;&lt;!----&gt;&lt;span class=&quot;mcnPreviewText&quot; style=&quot;display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;&quot;&gt;&lt;/span&gt;
    &lt;!--&lt;![endif]--&gt;
    &lt;!--*|END:IF|*--&gt;
    &lt;center&gt;
        &lt;div style=&quot;background:#FFCD00;background-color:#FFCD00;margin:0px auto;&quot;&gt;
                        &lt;table align=&quot;center&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; role=&quot;presentation&quot; style=&quot;background:#FFCD00;background-color:#FFCD00;width:100%;&quot;&gt;
                          &lt;tbody&gt;
                            &lt;tr&gt;
                              &lt;td style=&quot;direction:ltr;font-size:0px;padding:0;text-align:center;&quot;&gt;
                                &lt;!--[if mso | IE]&gt;
                  &lt;table role=&quot;presentation&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;&gt;

        &lt;tr&gt;
      &lt;![endif]--&gt;
                                &lt;!-- UI Logo --&gt;
                                &lt;!--[if mso | IE]&gt;
            &lt;td
               class=&quot;&quot; style=&quot;vertical-align:middle;width:534.66px;&quot;
            &gt;
          &lt;![endif]--&gt;
                                &lt;div class=&quot;mj-column-per-67 mj-outlook-group-fix&quot; style=&quot;font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;&quot;&gt;
                                  &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; role=&quot;presentation&quot; width=&quot;100%&quot;&gt;
                                    &lt;tbody&gt;
                                      &lt;tr&gt;
                                        &lt;td style=&quot;vertical-align:middle;padding:0px 0px;&quot;&gt;
                                          &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; role=&quot;presentation&quot; style=&quot;&quot; width=&quot;100%&quot;&gt;
                                            &lt;tbody&gt;&lt;tr&gt;
                                              &lt;td align=&quot;left&quot; style=&quot;font-size:0px;padding:15px 25px;word-break:break-word;&quot;&gt;
                                                &lt;div style=&quot;font-family:Roboto, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;&quot;&gt;
                                                  &lt;div class=&quot;header-logo&quot;&gt;
                                                    &lt;a href=&quot;https://www.uiowa.edu&quot;&gt;&lt;img src=&quot;https://dispatch-cdn.its.uiowa.edu/images/ui/Block-IOWA-BLACK-nomargin.png&quot; alt=&quot;The University of Iowa&quot; width=&quot;160&quot; style=&quot;padding: 0px; width: 160;&quot;&gt;&lt;/a&gt;
                                                  &lt;/div&gt;
                                                &lt;/div&gt;
                                              &lt;/td&gt;
                                            &lt;/tr&gt;
                                          &lt;/tbody&gt;&lt;/table&gt;
                                        &lt;/td&gt;
                                      &lt;/tr&gt;
                                    &lt;/tbody&gt;
                                  &lt;/table&gt;
                                &lt;/div&gt;
                                &lt;!--[if mso | IE]&gt;
            &lt;/td&gt;
          &lt;![endif]--&gt;
                                &lt;!-- College/Department Branding --&gt;
                                &lt;!--[if mso | IE]&gt;
            &lt;td
               class=&quot;&quot; style=&quot;vertical-align:middle;width:263.34px;&quot;
            &gt;
          &lt;![endif]--&gt;

                                &lt;!--[if mso | IE]&gt;
            &lt;/td&gt;

        &lt;/tr&gt;

                  &lt;/table&gt;
                &lt;![endif]--&gt;
                              &lt;/td&gt;
                            &lt;/tr&gt;
                          &lt;/tbody&gt;
                        &lt;/table&gt;
                      &lt;/div&gt;
        &lt;table align=&quot;center&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; height=&quot;100%&quot; width=&quot;100%&quot; id=&quot;bodyTable&quot;&gt;
            &lt;tr&gt;
                &lt;td align=&quot;center&quot; valign=&quot;top&quot; id=&quot;bodyCell&quot;&gt;
                    &lt;!-- BEGIN TEMPLATE // --&gt;
                    &lt;!--[if (gte mso 9)|(IE)]&gt;
                        &lt;table align=&quot;center&quot; border=&quot;0&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; width=&quot;600&quot; style=&quot;width:600px;&quot;&gt;
                        &lt;tr&gt;
                        &lt;td align=&quot;center&quot; valign=&quot;top&quot; width=&quot;600&quot; style=&quot;width:600px;&quot;&gt;
                        &lt;![endif]--&gt;
                    &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;templateContainer&quot;&gt;
                        &lt;tr&gt;
                            &lt;td valign=&quot;top&quot; id=&quot;templatePreheader&quot;&gt;&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;td valign=&quot;top&quot; id=&quot;templateHeader&quot;&gt;
                                &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;mcnImageBlock&quot; style=&quot;min-width:100%;&quot;&gt;
                                    &lt;tbody class=&quot;mcnImageBlockOuter&quot;&gt;
                                        &lt;tr&gt;
                                            &lt;td valign=&quot;top&quot; style=&quot;padding:0px&quot; class=&quot;mcnImageBlockInner&quot;&gt;
                                                &lt;table align=&quot;left&quot; width=&quot;100%&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;mcnImageContentContainer&quot; style=&quot;min-width:100%;&quot;&gt;
                                                    &lt;tbody&gt;
                                                        &lt;tr&gt;
                                                            &lt;td class=&quot;mcnImageContent&quot; valign=&quot;top&quot; style=&quot;padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0; text-align:center;&quot;&gt;
                                                                &lt;img align=&quot;center&quot; alt=&quot;&quot; src=&quot;https://dispatch-cdn.its.uiowa.edu/studentlife/client/ac-header-smaller.png&quot; width=&quot;600&quot; style=&quot;max-width:1200px; padding-bottom: 0; display: inline !important; vertical-align: bottom;&quot; class=&quot;mcnImage&quot;&gt;
                                                            &lt;/td&gt;
                                                        &lt;/tr&gt;
                                                    &lt;/tbody&gt;
                                                &lt;/table&gt;
                                            &lt;/td&gt;
                                        &lt;/tr&gt;
                                    &lt;/tbody&gt;
                                &lt;/table&gt;
                            &lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;td valign=&quot;top&quot; id=&quot;templateBody&quot;&gt;
                                
                                
                                    
                                        &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;mcnImageCardBlock&quot; style=&quot;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
    &lt;tbody class=&quot;mcnImageCardBlockOuter&quot;&gt;
        &lt;tr&gt;
            &lt;td class=&quot;mcnImageCardBlockInner&quot; valign=&quot;top&quot; style=&quot;padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                &lt;table align=&quot;left&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;mcnImageCardBottomContent&quot; width=&quot;100%&quot; style=&quot;background-color: #000;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%; border: 1px solid #333&quot;&gt;
                    &lt;tbody&gt;
                        
                        &lt;tr&gt;
                            &lt;td class=&quot;mcnImageCardBottomImageContent&quot; align=&quot;left&quot; valign=&quot;top&quot; style=&quot;padding-top: 0px;padding-right: 0px;padding-bottom: 0;padding-left: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                                &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/105531&quot; title=&quot;&quot; class=&quot;&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                                    &lt;img alt=&quot;Haunted House - Click for details on this event.&quot; src=&quot;https://content.uiowa.edu/sites/content.uiowa.edu/files/styles/large/public/14113-29-820_x_360_cab_haunted_house_facebook_cover.jpg?itok=9GjldOHd&quot; width=&quot;564&quot; style=&quot;max-width: 600px;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;&quot; class=&quot;mcnImage&quot;&gt;
                                &lt;/a&gt;
                            &lt;/td&gt;
                        &lt;/tr&gt;
                        
                        &lt;tr&gt;
                            &lt;td class=&quot;mcnTextContent&quot; valign=&quot;top&quot; style=&quot;padding: 9px 18px;color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: left;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;&quot; width=&quot;546&quot;&gt;
                                &lt;h2 class=&quot;null&quot; style=&quot;display: block;margin: 0;padding: 0;color: #ffffff;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;text-align: left;&quot;&gt;&lt;a href=&quot;https://afterclass.uiowa.edu/events/event/105531&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;Haunted House&lt;/a&gt;&lt;/h2&gt;
                                    
&lt;div&gt;&lt;strong&gt;Date:&lt;/strong&gt;
    
        



        &lt;span itemprop=&quot;startDate&quot; datetime=&quot;2022-10-22T19:00:00-05:00&quot;&gt;
            Saturday, October 22&lt;/span&gt;, 7:00 PM





    
    
&lt;/div&gt;

&lt;div style=&quot;margin-bottom: 10px;&quot;&gt;



    
    &lt;strong&gt; Location: &lt;/strong&gt;
        &lt;span itemprop=&quot;location&quot;&gt;
             Second Floor Ballroom, 
            
                
                    
                        &lt;a href=&quot;https://afterclass.uiowa.edu/events/venue/472&quot;&gt;Iowa Memorial Union (IMU)&lt;/a&gt;
                    
                
            
        &lt;/span&gt;
    


&lt;/div&gt;


                                     From Hansel and Gretel to Children of the Corn, come face your fears with CAB&amp;#039;s Haunted House. Each room has a different terrifying theme that you&amp;#039;ll be immersed in. Come join us. . . if you dare. . .    &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/105531&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;More...&lt;/a&gt;
                                &lt;/div&gt;
                                &lt;/td&gt;
                            &lt;/tr&gt;
                        &lt;/tbody&gt;
                    &lt;/table&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;

                                    
                                &lt;!-- event 1 --&gt;

                                
                                    
                                        &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;mcnImageCardBlock&quot; style=&quot;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
    &lt;tbody class=&quot;mcnImageCardBlockOuter&quot;&gt;
        &lt;tr&gt;
            &lt;td class=&quot;mcnImageCardBlockInner&quot; valign=&quot;top&quot; style=&quot;padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                &lt;table align=&quot;left&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;mcnImageCardBottomContent&quot; width=&quot;100%&quot; style=&quot;background-color: #000;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%; border: 1px solid #333&quot;&gt;
                    &lt;tbody&gt;
                        
                        &lt;tr&gt;
                            &lt;td class=&quot;mcnImageCardBottomImageContent&quot; align=&quot;left&quot; valign=&quot;top&quot; style=&quot;padding-top: 0px;padding-right: 0px;padding-bottom: 0;padding-left: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                                &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/105866&quot; title=&quot;&quot; class=&quot;&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                                    &lt;img alt=&quot;Riverside Chats - Click for details on this event.&quot; src=&quot;https://content.uiowa.edu/sites/content.uiowa.edu/files/styles/large/public/riverside_chats_instagram_post.jpg?itok=DvYKGENz&quot; width=&quot;564&quot; style=&quot;max-width: 600px;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;&quot; class=&quot;mcnImage&quot;&gt;
                                &lt;/a&gt;
                            &lt;/td&gt;
                        &lt;/tr&gt;
                        
                        &lt;tr&gt;
                            &lt;td class=&quot;mcnTextContent&quot; valign=&quot;top&quot; style=&quot;padding: 9px 18px;color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: left;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;&quot; width=&quot;546&quot;&gt;
                                &lt;h2 class=&quot;null&quot; style=&quot;display: block;margin: 0;padding: 0;color: #ffffff;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;text-align: left;&quot;&gt;&lt;a href=&quot;https://afterclass.uiowa.edu/events/event/105866&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;Riverside Chats&lt;/a&gt;&lt;/h2&gt;
                                    
&lt;div style=&quot;margin-bottom: 10px;&quot;&gt;



    
    &lt;strong&gt; Location: &lt;/strong&gt;
        &lt;span itemprop=&quot;location&quot;&gt;
             Catlett Marketplace (Private Dining Conference Room), 
            
                
                    
                        &lt;a href=&quot;https://afterclass.uiowa.edu/events/venue/388&quot;&gt;Catlett Hall&lt;/a&gt;
                    
                
            
        &lt;/span&gt;
    


&lt;/div&gt;


                                     Riverside Chats are a great opportunity to mingle with your fellow students over a meal in one of the marketplaces. Our first ever Riverside Chat will be happening Thursday, Oct. 20 from 5:30 p. m. to 6:30 p. m. in Catlett Private Dining. &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/105866&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;More...&lt;/a&gt;
                                &lt;/div&gt;
                                &lt;/td&gt;
                            &lt;/tr&gt;
                        &lt;/tbody&gt;
                    &lt;/table&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;

                                    
                                &lt;!-- event 1 --&gt;

                                
                                    
                                        &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;mcnImageCardBlock&quot; style=&quot;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
    &lt;tbody class=&quot;mcnImageCardBlockOuter&quot;&gt;
        &lt;tr&gt;
            &lt;td class=&quot;mcnImageCardBlockInner&quot; valign=&quot;top&quot; style=&quot;padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                &lt;table align=&quot;left&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;mcnImageCardBottomContent&quot; width=&quot;100%&quot; style=&quot;background-color: #000;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%; border: 1px solid #333&quot;&gt;
                    &lt;tbody&gt;
                        
                        &lt;tr&gt;
                            &lt;td class=&quot;mcnImageCardBottomImageContent&quot; align=&quot;left&quot; valign=&quot;top&quot; style=&quot;padding-top: 0px;padding-right: 0px;padding-bottom: 0;padding-left: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                                &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/99361&quot; title=&quot;&quot; class=&quot;&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                                    &lt;img alt=&quot;Tree Talk and Tour at the Sciences Library - Click for details on this event.&quot; src=&quot;https://content.uiowa.edu/sites/content.uiowa.edu/files/styles/large/public/tree_tour_and_talk_600x600.jpg?itok=dLELI2gq&quot; width=&quot;564&quot; style=&quot;max-width: 600px;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;&quot; class=&quot;mcnImage&quot;&gt;
                                &lt;/a&gt;
                            &lt;/td&gt;
                        &lt;/tr&gt;
                        
                        &lt;tr&gt;
                            &lt;td class=&quot;mcnTextContent&quot; valign=&quot;top&quot; style=&quot;padding: 9px 18px;color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: left;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;&quot; width=&quot;546&quot;&gt;
                                &lt;h2 class=&quot;null&quot; style=&quot;display: block;margin: 0;padding: 0;color: #ffffff;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;text-align: left;&quot;&gt;&lt;a href=&quot;https://afterclass.uiowa.edu/events/event/99361&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;Tree Talk and Tour at the Sciences Library&lt;/a&gt;&lt;/h2&gt;
                                    
&lt;div style=&quot;margin-bottom: 10px;&quot;&gt;



    
    &lt;strong&gt; Location: &lt;/strong&gt;
        &lt;span itemprop=&quot;location&quot;&gt;
            
            
                
                    
                        &lt;a href=&quot;https://afterclass.uiowa.edu/events/venue/554&quot;&gt;Sciences Library&lt;/a&gt;
                    
                
            
        &lt;/span&gt;
    


&lt;/div&gt;


                                     Join Arborist Andy Dahl for a tree talk and tour at the Sciences Library! This program will be held on Wednesday, Oct. 19, 2022. The tree talk will begin at 2 p. m. on the 3rd floor of the Sciences Library. &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/99361&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;More...&lt;/a&gt;
                                &lt;/div&gt;
                                &lt;/td&gt;
                            &lt;/tr&gt;
                        &lt;/tbody&gt;
                    &lt;/table&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;

                                    
                                &lt;!-- event 1 --&gt;

                                
                                    
                                        &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;mcnImageCardBlock&quot; style=&quot;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
    &lt;tbody class=&quot;mcnImageCardBlockOuter&quot;&gt;
        &lt;tr&gt;
            &lt;td class=&quot;mcnImageCardBlockInner&quot; valign=&quot;top&quot; style=&quot;padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                &lt;table align=&quot;left&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;mcnImageCardBottomContent&quot; width=&quot;100%&quot; style=&quot;background-color: #000;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%; border: 1px solid #333&quot;&gt;
                    &lt;tbody&gt;
                        
                        &lt;tr&gt;
                            &lt;td class=&quot;mcnImageCardBottomImageContent&quot; align=&quot;left&quot; valign=&quot;top&quot; style=&quot;padding-top: 0px;padding-right: 0px;padding-bottom: 0;padding-left: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                                &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/106071&quot; title=&quot;&quot; class=&quot;&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                                    &lt;img alt=&quot;WiCS - Pumpkin Painting Social - Click for details on this event.&quot; src=&quot;https://content.uiowa.edu/sites/content.uiowa.edu/files/styles/large/public/28700762_154396285373386_5955214439539567157_o.png?itok=Fzdb0x74&quot; width=&quot;564&quot; style=&quot;max-width: 600px;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;&quot; class=&quot;mcnImage&quot;&gt;
                                &lt;/a&gt;
                            &lt;/td&gt;
                        &lt;/tr&gt;
                        
                        &lt;tr&gt;
                            &lt;td class=&quot;mcnTextContent&quot; valign=&quot;top&quot; style=&quot;padding: 9px 18px;color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: left;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;&quot; width=&quot;546&quot;&gt;
                                &lt;h2 class=&quot;null&quot; style=&quot;display: block;margin: 0;padding: 0;color: #ffffff;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;text-align: left;&quot;&gt;&lt;a href=&quot;https://afterclass.uiowa.edu/events/event/106071&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;WiCS - Pumpkin Painting Social&lt;/a&gt;&lt;/h2&gt;
                                    
&lt;div style=&quot;margin-bottom: 10px;&quot;&gt;



    
    &lt;strong&gt; Location: &lt;/strong&gt;
        &lt;span itemprop=&quot;location&quot;&gt;
             Rm 349, 
            
                
                    
                        &lt;a href=&quot;https://afterclass.uiowa.edu/events/venue/472&quot;&gt;Iowa Memorial Union (IMU)&lt;/a&gt;
                    
                
            
        &lt;/span&gt;
    


&lt;/div&gt;


                                     Join us to paint some pumpkins and spend time with other Women in Computing Sciences! &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/106071&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;More...&lt;/a&gt;
                                &lt;/div&gt;
                                &lt;/td&gt;
                            &lt;/tr&gt;
                        &lt;/tbody&gt;
                    &lt;/table&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;

                                    
                                &lt;!-- event 1 --&gt;

                                
                                    
                                        &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;mcnImageCardBlock&quot; style=&quot;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
    &lt;tbody class=&quot;mcnImageCardBlockOuter&quot;&gt;
        &lt;tr&gt;
            &lt;td class=&quot;mcnImageCardBlockInner&quot; valign=&quot;top&quot; style=&quot;padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                &lt;table align=&quot;left&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;mcnImageCardBottomContent&quot; width=&quot;100%&quot; style=&quot;background-color: #000;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%; border: 1px solid #333&quot;&gt;
                    &lt;tbody&gt;
                        
                        &lt;tr&gt;
                            &lt;td class=&quot;mcnImageCardBottomImageContent&quot; align=&quot;left&quot; valign=&quot;top&quot; style=&quot;padding-top: 0px;padding-right: 0px;padding-bottom: 0;padding-left: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                                &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/104951&quot; title=&quot;&quot; class=&quot;&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                                    &lt;img alt=&quot;Graduate and Professional Students Support Space - Click for details on this event.&quot; src=&quot;https://content.uiowa.edu/sites/content.uiowa.edu/files/styles/large/public/graduate_and_professional_student_support_space.png?itok=HNqMjY6G&quot; width=&quot;564&quot; style=&quot;max-width: 600px;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;&quot; class=&quot;mcnImage&quot;&gt;
                                &lt;/a&gt;
                            &lt;/td&gt;
                        &lt;/tr&gt;
                        
                        &lt;tr&gt;
                            &lt;td class=&quot;mcnTextContent&quot; valign=&quot;top&quot; style=&quot;padding: 9px 18px;color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: left;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;&quot; width=&quot;546&quot;&gt;
                                &lt;h2 class=&quot;null&quot; style=&quot;display: block;margin: 0;padding: 0;color: #ffffff;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;text-align: left;&quot;&gt;&lt;a href=&quot;https://afterclass.uiowa.edu/events/event/104951&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;Graduate and Professional Students Support Space&lt;/a&gt;&lt;/h2&gt;
                                    
&lt;div&gt;&lt;strong&gt;Next Date:&lt;/strong&gt;
    
        



        &lt;span itemprop=&quot;startDate&quot; datetime=&quot;2022-10-27T16:00:00-05:00&quot;&gt;
            Thursday, October 27&lt;/span&gt;, 4:00 PM





    
     &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/104951&quot;&gt;More Dates&lt;/a&gt;
&lt;/div&gt;

&lt;div style=&quot;margin-bottom: 10px;&quot;&gt;

&lt;strong&gt;Location: &lt;/strong&gt;Virtual Event&lt;br /&gt;


&lt;/div&gt;


                                     It is a support space for graduate and professional students. The support space will run for six weeks. Each week will be based on a specific topic that there will be guided discussion around, as well as incorporating skills from ACT (Acceptance &amp; Commitment Therapy) curriculum. &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/104951&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;More...&lt;/a&gt;
                                &lt;/div&gt;
                                &lt;/td&gt;
                            &lt;/tr&gt;
                        &lt;/tbody&gt;
                    &lt;/table&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;

                                    
                                &lt;!-- event 1 --&gt;

                                
                                    
                                        &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;mcnImageCardBlock&quot; style=&quot;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
    &lt;tbody class=&quot;mcnImageCardBlockOuter&quot;&gt;
        &lt;tr&gt;
            &lt;td class=&quot;mcnImageCardBlockInner&quot; valign=&quot;top&quot; style=&quot;padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                &lt;table align=&quot;left&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;mcnImageCardBottomContent&quot; width=&quot;100%&quot; style=&quot;background-color: #000;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%; border: 1px solid #333&quot;&gt;
                    &lt;tbody&gt;
                        
                        &lt;tr&gt;
                            &lt;td class=&quot;mcnImageCardBottomImageContent&quot; align=&quot;left&quot; valign=&quot;top&quot; style=&quot;padding-top: 0px;padding-right: 0px;padding-bottom: 0;padding-left: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                                &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/104111&quot; title=&quot;&quot; class=&quot;&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                                    &lt;img alt=&quot;IWP Panel Discussion Series: &quot;Images of America&quot; - Click for details on this event.&quot; src=&quot;https://content.uiowa.edu/sites/content.uiowa.edu/files/styles/large/public/8.png?itok=GPafjzdY&quot; width=&quot;564&quot; style=&quot;max-width: 600px;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;&quot; class=&quot;mcnImage&quot;&gt;
                                &lt;/a&gt;
                            &lt;/td&gt;
                        &lt;/tr&gt;
                        
                        &lt;tr&gt;
                            &lt;td class=&quot;mcnTextContent&quot; valign=&quot;top&quot; style=&quot;padding: 9px 18px;color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: left;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;&quot; width=&quot;546&quot;&gt;
                                &lt;h2 class=&quot;null&quot; style=&quot;display: block;margin: 0;padding: 0;color: #ffffff;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;text-align: left;&quot;&gt;&lt;a href=&quot;https://afterclass.uiowa.edu/events/event/104111&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;IWP Panel Discussion Series: &quot;Images of America&quot;&lt;/a&gt;&lt;/h2&gt;
                                    
&lt;div&gt;&lt;strong&gt;Date:&lt;/strong&gt;
    
        



        &lt;span itemprop=&quot;startDate&quot; datetime=&quot;2022-10-21T12:00:00-05:00&quot;&gt;
            Friday, October 21&lt;/span&gt;, 12:00 PM





    
    
&lt;/div&gt;

&lt;div style=&quot;margin-bottom: 10px;&quot;&gt;



    
    &lt;strong&gt; Location: &lt;/strong&gt;
        &lt;span itemprop=&quot;location&quot;&gt;
             Meeting Room A, 
            
                
                    
                        &lt;a href=&quot;https://afterclass.uiowa.edu/events/venue/469&quot;&gt;Iowa City Public Library&lt;/a&gt;
                    
                
            
        &lt;/span&gt;
    


&lt;/div&gt;


                                     In this final panel discussion, IWP&amp;#039;s 2022 Fall Residency writers discuss their experiences in Iowa, the U. S. , the Residency, and the University of Iowa campus. This is always a great conversation. &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/104111&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;More...&lt;/a&gt;
                                &lt;/div&gt;
                                &lt;/td&gt;
                            &lt;/tr&gt;
                        &lt;/tbody&gt;
                    &lt;/table&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;

                                    
                                &lt;!-- event 1 --&gt;

                                
                                    
                                        &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;mcnImageCardBlock&quot; style=&quot;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
    &lt;tbody class=&quot;mcnImageCardBlockOuter&quot;&gt;
        &lt;tr&gt;
            &lt;td class=&quot;mcnImageCardBlockInner&quot; valign=&quot;top&quot; style=&quot;padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                &lt;table align=&quot;left&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;mcnImageCardBottomContent&quot; width=&quot;100%&quot; style=&quot;background-color: #000;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%; border: 1px solid #333&quot;&gt;
                    &lt;tbody&gt;
                        
                        &lt;tr&gt;
                            &lt;td class=&quot;mcnTextContent&quot; valign=&quot;top&quot; style=&quot;padding: 9px 18px;color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: left;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;&quot; width=&quot;546&quot;&gt;
                                &lt;h2 class=&quot;null&quot; style=&quot;display: block;margin: 0;padding: 0;color: #ffffff;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;text-align: left;&quot;&gt;&lt;a href=&quot;https://afterclass.uiowa.edu/events/event/104811&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;(Hot)Dogs with the Dean&lt;/a&gt;&lt;/h2&gt;
                                    
&lt;div&gt;&lt;strong&gt;Date:&lt;/strong&gt;
    
        



        &lt;span itemprop=&quot;startDate&quot; datetime=&quot;2022-10-23T15:00:00-05:00&quot;&gt;
            Sunday, October 23&lt;/span&gt;, 3:00 PM





    
    
&lt;/div&gt;

&lt;div style=&quot;margin-bottom: 10px;&quot;&gt;



    
    &lt;strong&gt; Location: &lt;/strong&gt;
        &lt;span itemprop=&quot;location&quot;&gt;
            
            
                
                    
                        &lt;a href=&quot;https://afterclass.uiowa.edu/events/venue/456&quot;&gt;Hubbard Park&lt;/a&gt;
                    
                
            
        &lt;/span&gt;
    


&lt;/div&gt;


                                     (Hot)Dogs with the Dean is a new event for Homecoming 2022. This campus cookout will serve as the kickoff to Homecoming week event and will immediately follow the Hawks Run Home 5k. &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/104811&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;More...&lt;/a&gt;
                                &lt;/div&gt;
                                &lt;/td&gt;
                            &lt;/tr&gt;
                        &lt;/tbody&gt;
                    &lt;/table&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;

                                    
                                &lt;!-- event 1 --&gt;

                                
                                    
                                        &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;mcnImageCardBlock&quot; style=&quot;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
    &lt;tbody class=&quot;mcnImageCardBlockOuter&quot;&gt;
        &lt;tr&gt;
            &lt;td class=&quot;mcnImageCardBlockInner&quot; valign=&quot;top&quot; style=&quot;padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;&quot;&gt;
                &lt;table align=&quot;left&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;mcnImageCardBottomContent&quot; width=&quot;100%&quot; style=&quot;background-color: #000;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%; border: 1px solid #333&quot;&gt;
                    &lt;tbody&gt;
                        
                        &lt;tr&gt;
                            &lt;td class=&quot;mcnTextContent&quot; valign=&quot;top&quot; style=&quot;padding: 9px 18px;color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: left;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;&quot; width=&quot;546&quot;&gt;
                                &lt;h2 class=&quot;null&quot; style=&quot;display: block;margin: 0;padding: 0;color: #ffffff;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;text-align: left;&quot;&gt;&lt;a href=&quot;https://afterclass.uiowa.edu/events/event/104816&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;Homecoming BINGO&lt;/a&gt;&lt;/h2&gt;
                                    
&lt;div&gt;&lt;strong&gt;Date:&lt;/strong&gt;
    
        



        &lt;span itemprop=&quot;startDate&quot; datetime=&quot;2022-10-24T19:00:00-05:00&quot;&gt;
            Monday, October 24&lt;/span&gt;, 7:00 PM





    
    
&lt;/div&gt;

&lt;div style=&quot;margin-bottom: 10px;&quot;&gt;



    
    &lt;strong&gt; Location: &lt;/strong&gt;
        &lt;span itemprop=&quot;location&quot;&gt;
             Main Lounge, 
            
                
                    
                        &lt;a href=&quot;https://afterclass.uiowa.edu/events/venue/472&quot;&gt;Iowa Memorial Union (IMU)&lt;/a&gt;
                    
                
            
        &lt;/span&gt;
    


&lt;/div&gt;


                                     Homecoming Executive Council and Campus Activities Board (CAB) will be hosting a BINGO night in the IMU Main Lounge from 7-9 on Monday, Oct. 24. Students are invited for a friendly night of competition with prizes available. &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/104816&quot; target=&quot;_blank&quot; style=&quot;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;&quot;&gt;More...&lt;/a&gt;
                                &lt;/div&gt;
                                &lt;/td&gt;
                            &lt;/tr&gt;
                        &lt;/tbody&gt;
                    &lt;/table&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;

                                    
                                &lt;!-- event 1 --&gt;

                                
                                
                                &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;mcnBoxedTextBlock&quot; style=&quot;min-width:100%;&quot;&gt;
                                    &lt;!--[if gte mso 9]&gt;
                                        &lt;table align=&quot;center&quot; border=&quot;0&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; width=&quot;100%&quot;&gt;
                                        &lt;![endif]--&gt;
                                    &lt;tbody class=&quot;mcnBoxedTextBlockOuter&quot;&gt;
                                        &lt;tr&gt;
                                            &lt;td valign=&quot;top&quot; class=&quot;mcnBoxedTextBlockInner&quot;&gt;
                                                &lt;!--[if gte mso 9]&gt;
                                                    &lt;td align=&quot;center&quot; valign=&quot;top&quot; &quot;&gt;
                                                    &lt;![endif]--&gt;
                                                &lt;table align=&quot;left&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; style=&quot;min-width:100%;&quot; class=&quot;mcnBoxedTextContentContainer&quot;&gt;
                                                    &lt;tbody&gt;
                                                        &lt;tr&gt;
                                                            &lt;td style=&quot;padding-top:9px; padding-left:18px; padding-bottom:9px; padding-right:18px;&quot;&gt;
                                                                &lt;table border=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;mcnTextContentContainer&quot; width=&quot;100%&quot; style=&quot;min-width: 100% !important;background-color: #000;&quot;&gt;
                                                                    &lt;tbody&gt;
                                                                        &lt;tr&gt;
                                                                            &lt;td valign=&quot;top&quot; class=&quot;mcnTextContent&quot; style=&quot;padding: 18px;color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: left;&quot;&gt;
                                                                                &lt;h2 class=&quot;null&quot;&gt;&lt;a href=&quot;https://afterclass.uiowa.edu/events/event/100826&quot; target=&quot;_blank&quot;&gt;Intramural Go the Distance Swimming Challenge Registration Open&lt;/a&gt;&lt;/h2&gt;
                                                                                
&lt;div style=&quot;margin-bottom: 10px;&quot;&gt;



    


&lt;/div&gt;


                                                                                 Participants will have just over five weeks to swim as much as they want to/can. Each time a participant completes a swim, the participant should submit the swim information to the Sport Programs staff. &lt;a href=&quot;https://afterclass.uiowa.edu/events/event/100826&quot; target=&quot;_blank&quot;&gt;More...&lt;/a&gt;
                                                                            &lt;/td&gt;
                                                                        &lt;/tr&gt;
                                                                    &lt;/tbody&gt;
                                                                &lt;/table&gt;
                                                            &lt;/td&gt;
                                                        &lt;/tr&gt;
                                                    &lt;/tbody&gt;
                                                &lt;/table&gt;
                                                &lt;!--[if gte mso 9]&gt;
                                                    &lt;/td&gt;
                                                    &lt;![endif]--&gt;
                                                &lt;!--[if gte mso 9]&gt;
                                                    &lt;/tr&gt;
                                                    &lt;/table&gt;
                                                    &lt;![endif]--&gt;
                                            &lt;/td&gt;
                                        &lt;/tr&gt;
                                    &lt;/tbody&gt;
                                &lt;/table&gt;
                                
                                
                            &lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;td valign=&quot;top&quot; id=&quot;templateFooter&quot;&gt;
                                &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;mcnTextBlock&quot; style=&quot;min-width:100%;&quot;&gt;
                                    &lt;tbody class=&quot;mcnTextBlockOuter&quot;&gt;
                                        &lt;tr&gt;
                                            &lt;td valign=&quot;top&quot; class=&quot;mcnTextBlockInner&quot; style=&quot;padding-top:9px;&quot;&gt;
                                                &lt;!--[if mso]&gt;
                &lt;table align=&quot;left&quot; border=&quot;0&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; width=&quot;100%&quot; style=&quot;width:100%;&quot;&gt;
                &lt;tr&gt;
                &lt;![endif]--&gt;
                                                &lt;!--[if mso]&gt;
                &lt;td valign=&quot;top&quot; width=&quot;600&quot; style=&quot;width:600px;&quot;&gt;
                &lt;![endif]--&gt;
                                                &lt;table align=&quot;left&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; style=&quot;max-width:100%; min-width:100%;&quot; width=&quot;100%&quot; class=&quot;mcnTextContentContainer&quot;&gt;
                                                    &lt;tbody&gt;
                                                        &lt;tr&gt;
                                                            &lt;td valign=&quot;top&quot; class=&quot;mcnTextContent&quot; style=&quot;padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;&quot;&gt;
                                                                &lt;p&gt;Individuals with disabilities are encouraged to attend all University of Iowa&ndash;sponsored events. If you are a person with a disability who requires a reasonable accommodation in order to participate in this program, please contact the Office of the Vice President for Student Life in advance at &lt;a href=&quot;tel:319-335-3557&quot;&gt;319-335-3557&lt;/a&gt; or &lt;a href=&quot;mailto:vp-student-life@uiowa.edu&quot;&gt;vp-student-life@uiowa.edu&lt;/a&gt;.&lt;/p&gt;
                                                                &lt;p&gt;
                                                                    After Class is a Divison of Student Life initiative meant to help students get involved, stay informed, and enjoy student life at Iowa.&lt;/p&gt;
                                                            &lt;/td&gt;
                                                        &lt;/tr&gt;
                                                    &lt;/tbody&gt;
                                                &lt;/table&gt;
                                                &lt;!--[if mso]&gt;
                &lt;/td&gt;
                &lt;![endif]--&gt;
                                                &lt;!--[if mso]&gt;
                &lt;/tr&gt;
                &lt;/table&gt;
                &lt;![endif]--&gt;
                                            &lt;/td&gt;
                                        &lt;/tr&gt;
                                    &lt;/tbody&gt;
                                &lt;/table&gt;
                                &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;mcnButtonBlock&quot; style=&quot;min-width:100%;&quot;&gt;
                                    &lt;tbody class=&quot;mcnButtonBlockOuter&quot;&gt;
                                        &lt;tr&gt;
                                            &lt;td style=&quot;padding-top:0; padding-right:18px; padding-bottom:18px; padding-left:18px;&quot; valign=&quot;top&quot; align=&quot;center&quot; class=&quot;mcnButtonBlockInner&quot;&gt;
                                                &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;mcnButtonContentContainer&quot; style=&quot;border-collapse: separate !important;background-color: #000; border: 1px solid #FFCD00; text-transform: uppercase&quot;&gt;
                                                    &lt;tbody&gt;
                                                        &lt;tr&gt;
                                                            &lt;td align=&quot;center&quot; valign=&quot;middle&quot; class=&quot;mcnButtonContent&quot; style=&quot;font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, Verdana, sans-serif; font-size: 16px; padding: 18px;&quot;&gt;
                                                                &lt;a class=&quot;mcnButton &quot; title=&quot;Add Your Event&quot; href=&quot;https://afterclass.uiowa.edu/add&quot; target=&quot;_blank&quot; style=&quot;font-weight: bold;letter-spacing: normal;line-height: 100%;text-align: center;text-decoration: none;color: #fff;&quot;&gt;Add Your Event&lt;/a&gt;
                                                            &lt;/td&gt;
                                                        &lt;/tr&gt;
                                                    &lt;/tbody&gt;
                                                &lt;/table&gt;
                                            &lt;/td&gt;
                                        &lt;/tr&gt;
                                    &lt;/tbody&gt;
                                &lt;/table&gt;
                                &lt;div style=&quot;background:#FFCD00;background-color:#FFCD00;margin:0px auto;max-width:798px;&quot;&gt;
                          &lt;table align=&quot;center&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; role=&quot;presentation&quot; style=&quot;background:#FFCD00;background-color:#FFCD00;width:100%;&quot;&gt;
                            &lt;tbody&gt;
                              &lt;tr&gt;
                                &lt;td style=&quot;direction:ltr;font-size:0px;padding:5px 0px;text-align:center;&quot;&gt;
                                  &lt;!--[if mso | IE]&gt;
                  &lt;table role=&quot;presentation&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;&gt;

        &lt;tr&gt;

            &lt;td
               class=&quot;&quot; style=&quot;vertical-align:top;width:400px;&quot;
            &gt;
          &lt;![endif]--&gt;
                                  &lt;div class=&quot;mj-column-px-400 mj-outlook-group-fix&quot; style=&quot;font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;&quot;&gt;
                                    &lt;div style=&quot;text-align: center;&quot;&gt;
                                        &lt;a href=&quot;https://www.facebook.com/uistudentlife&quot;&gt;&lt;img src=&quot;https://dispatch-cdn.its.uiowa.edu/dispatch/client/icons_facebook_blk.png&quot; alt=&quot;Facebook&quot; style=&quot;padding: 0 10px 0 10px;&quot; width=&quot;30&quot; height=&quot;30&quot;&gt;&lt;/a&gt;&nbsp;
                                        &lt;a href=&quot;https://twitter.com/uistudentlife&quot;&gt;&lt;img src=&quot;https://dispatch-cdn.its.uiowa.edu/dispatch/client/icons_twitter_blk.png&quot; alt=&quot;Twitter&quot; style=&quot;padding: 0 10px 0 10px;&quot; width=&quot;30&quot; height=&quot;30&quot;&gt;&lt;/a&gt;&nbsp;
                                        &lt;a href=&quot;https://www.instagram.com/uistudentlife/&quot;&gt;&lt;img src=&quot;https://dispatch-cdn.its.uiowa.edu/dispatch/client/icons_instagram_blk.png&quot; alt=&quot;Instagram&quot; style=&quot;padding: 0 10px 0 10px;&quot; width=&quot;30&quot; height=&quot;30&quot;&gt;&lt;/a&gt;&nbsp;



                                      &lt;/div&gt;&lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; role=&quot;presentation&quot; style=&quot;vertical-align:top;&quot; width=&quot;100%&quot;&gt;

                                    &lt;/table&gt;
                                  &lt;/div&gt;
                                  &lt;!--[if mso | IE]&gt;
            &lt;/td&gt;

        &lt;/tr&gt;

                  &lt;/table&gt;
                &lt;![endif]--&gt;
                                &lt;/td&gt;
                              &lt;/tr&gt;
                            &lt;/tbody&gt;
                          &lt;/table&gt;
                        &lt;/div&gt;

                                &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;mcnTextBlock&quot; style=&quot;min-width:100%;&quot;&gt;
                                    &lt;tbody class=&quot;mcnTextBlockOuter&quot;&gt;
                                        &lt;tr&gt;
                                            &lt;td valign=&quot;top&quot; class=&quot;mcnTextBlockInner&quot; style=&quot;padding-top:9px;&quot;&gt;
                                                &lt;!--[if mso]&gt;
                &lt;table align=&quot;left&quot; border=&quot;0&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; width=&quot;100%&quot; style=&quot;width:100%;&quot;&gt;
                &lt;tr&gt;
                &lt;![endif]--&gt;

                                                &lt;!--[if mso]&gt;
                &lt;/tr&gt;
                &lt;/table&gt;
                &lt;![endif]--&gt;
                                            &lt;/td&gt;
                                        &lt;/tr&gt;
                                    &lt;/tbody&gt;
                                &lt;/table&gt;
                            &lt;/td&gt;
                        &lt;/tr&gt;
                    &lt;/table&gt;
                    &lt;!--[if (gte mso 9)|(IE)]&gt;
                        &lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;/table&gt;
                        &lt;![endif]--&gt;
                    &lt;!-- // END TEMPLATE --&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/table&gt;

        &lt;div style=&quot;background:#000000;background-color:#000000;margin:0px auto;max-width:798px;&quot;&gt;
                        &lt;table align=&quot;center&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; role=&quot;presentation&quot; style=&quot;background:#000000;background-color:#000000;width:100%;&quot;&gt;
                          &lt;tbody&gt;
                            &lt;tr&gt;
                              &lt;td style=&quot;direction:ltr;font-size:0px;padding:0;padding-bottom:0;padding-top:0;text-align:center;&quot;&gt;
                                &lt;!--[if mso | IE]&gt;
                  &lt;table role=&quot;presentation&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;&gt;

        &lt;tr&gt;

            &lt;td
               class=&quot;&quot; style=&quot;vertical-align:top;width:798px;&quot;
            &gt;
          &lt;![endif]--&gt;
                                &lt;div class=&quot;mj-column-per-100 mj-outlook-group-fix&quot; style=&quot;font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;&quot;&gt;
                                  &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; role=&quot;presentation&quot; width=&quot;100%&quot;&gt;
                                    &lt;tbody&gt;
                                      &lt;tr&gt;
                                        &lt;td style=&quot;vertical-align:top;padding:0px 0px;&quot;&gt;
                                          &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; role=&quot;presentation&quot; style=&quot;&quot; width=&quot;100%&quot;&gt;
                                            &lt;tbody&gt;&lt;tr&gt;
                                              &lt;td align=&quot;center&quot; style=&quot;font-size:0px;padding:30px 0px 15px 0px;word-break:break-word;&quot;&gt;
                                                &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; role=&quot;presentation&quot; style=&quot;border-collapse:collapse;border-spacing:0px;&quot;&gt;
                                                  &lt;tbody&gt;
                                                    &lt;tr&gt;
                                                      &lt;td style=&quot;width:120px;&quot;&gt;
                                                        &lt;a href=&quot;https://link.uiowa.edu/l/b3c1f98f-545d-44f6-a2e2-5f2535beccf4?m=3a65f0e7-6b90-41fe-873b-f44f6b346fac&amp;c=d.vpsc&amp;i=202011&quot; target=&quot;_blank&quot;&gt;
                                                          &lt;img alt=&quot;The University of Iowa&quot; height=&quot;auto&quot; src=&quot;https://dispatch-cdn.its.uiowa.edu/images/ui/Block-IOWA-GOLD-ffcd00-nomargin.png&quot; style=&quot;border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;&quot; width=&quot;120&quot;&gt;
                                                        &lt;/a&gt;
                                                      &lt;/td&gt;
                                                    &lt;/tr&gt;
                                                  &lt;/tbody&gt;
                                                &lt;/table&gt;
                                              &lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                              &lt;td align=&quot;center&quot; class=&quot;footer&quot; style=&quot;font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;&quot;&gt;
                                                &lt;div style=&quot;font-family:Roboto, Helvetica, Arial, sans-serif;font-size:12px;line-height:20px;text-align:center;color:#ffffff;&quot;&gt;
                                                  &lt;mj-raw&gt;
                                                  &lt;/mj-raw&gt;
                                                  &lt;mj-raw&gt;

                                                  &lt;/mj-raw&gt;

                                                  &lt;mj-raw&gt;

                                                  &lt;/mj-raw&gt;
                                                  &lt;mj-raw&gt;
                                                  &lt;/mj-raw&gt;
                                                  &lt;p&gt;
                                                  &lt;/p&gt;
                                                  &lt;p&gt;
                                                     &lt;a style=&quot;color: #fff; text-decoration: underline;&quot; href=&quot;https://opsmanual.uiowa.edu/community-policies/nondiscrimination-statement&quot;&gt;Nondiscrimination Statement&lt;/a&gt;
                                                  &lt;/p&gt;
                                                &lt;/div&gt;
                                              &lt;/td&gt;
                                            &lt;/tr&gt;
                                              &lt;tr&gt;
                                                &lt;td align=&quot;center&quot; class=&quot;footer&quot; style=&quot;font-size:0px;padding:10px 25px;padding-top:0px;word-break:break-word;&quot;&gt;
                                                  &lt;div style=&quot;font-family:Roboto, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#000000;&quot;&gt;
                                                    &lt;p&gt;&lt;/p&gt;
                                                  &lt;/div&gt;
                                                &lt;/td&gt;
                                              &lt;/tr&gt;
                                          &lt;/tbody&gt;&lt;/table&gt;
                                        &lt;/td&gt;
                                      &lt;/tr&gt;
                                    &lt;/tbody&gt;
                                  &lt;/table&gt;
                                &lt;/div&gt;
                                &lt;!--[if mso | IE]&gt;
            &lt;/td&gt;

        &lt;/tr&gt;

                  &lt;/table&gt;
                &lt;![endif]--&gt;
                              &lt;/td&gt;
                            &lt;/tr&gt;
                          &lt;/tbody&gt;
                        &lt;/table&gt;
                      &lt;/div&gt;
    &lt;/center&gt;
&lt;/body&gt;

&lt;/html&gt;

    
        </textarea>
      </div>
    </div>
  </div>
</template>
<script setup>
const eventFeed = await getEvents();
</script>
  
<style scoped>
.output-html {
  font-family: monospace;
  font-size: 10px;
}
</style>

