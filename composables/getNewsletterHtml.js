//Gets <html> through first <td>
function getNewsletterHeaderHtml() {
  var html = `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <!-- NAME: 1 COLUMN -->
    <!--[if gte mso 15]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>$Title | After Class | The University of Iowa</title>
    <style type="text/css">
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

    </style>
</head>

<body>
    <!--*|IF:MC_PREVIEW_TEXT|*-->
    <!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;"></span>
    <!--<![endif]-->
    <!--*|END:IF|*-->
    <center>
        <div style="background:#FFCD00;background-color:#FFCD00;margin:0px auto;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFCD00;background-color:#FFCD00;width:100%;">
                          <tbody>
                            <tr>
                              <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
                                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>
      <![endif]-->
                                <!-- UI Logo -->
                                <!--[if mso | IE]>
            <td
               class="" style="vertical-align:middle;width:534.66px;"
            >
          <![endif]-->
                                <div class="mj-column-per-67 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                      <tr>
                                        <td style="vertical-align:middle;padding:0px 0px;">
                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                            <tbody><tr>
                                              <td align="left" style="font-size:0px;padding:15px 25px;word-break:break-word;">
                                                <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                                                  <div class="header-logo">
                                                    <a href="https://www.uiowa.edu"><img src="https://dispatch-cdn.its.uiowa.edu/images/ui/Block-IOWA-BLACK-nomargin.png" alt="The University of Iowa" width="160" style="padding: 0px; width: 160;"></a>
                                                  </div>
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody></table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <!--[if mso | IE]>
            </td>
          <![endif]-->
                                <!-- College/Department Branding -->
                                <!--[if mso | IE]>
            <td
               class="" style="vertical-align:middle;width:263.34px;"
            >
          <![endif]-->

                                <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
        <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
            <tr>
                <td align="center" valign="top" id="bodyCell">
                    <!-- BEGIN TEMPLATE // -->
                    <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                        <tr>
                        <td align="center" valign="top" width="600" style="width:600px;">
                        <![endif]-->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                        <tr>
                            <td valign="top" id="templatePreheader"></td>
                        </tr>
                        <tr>
                            <td valign="top" id="templateHeader">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
                                    <tbody class="mcnImageBlockOuter">
                                        <tr>
                                            <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                                                <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                                                    <tbody>
                                                        <tr>
                                                            <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0; text-align:center;">
                                                                <img align="center" alt="" src="https://dispatch-cdn.its.uiowa.edu/studentlife/client/ac-header-smaller.png" width="600" style="max-width:1200px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" id="templateBody">`;

  return html;
}

function getNewsletterHeaderTextHtml(text) {
  var html =
    `<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                    <tbody class="mcnTextBlockOuter">
                        <tr>
                            <td valign="top" class="mcnTextBlockInner" style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                <!--[if mso]>
                                    <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                                    <tr>
                                    <![endif]-->
                                <!--[if mso]>
                                    <td valign="top" width="600" style="width:600px;">
                                    <![endif]-->
                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%" class="mcnTextContentContainer">
                                    <tbody>
                                        <tr>
                                            <td valign="top" class="mcnTextContent" style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #ffffff;font-family: Helvetica;font-size: 16px;line-height: 150%;text-align: left;">
                                                ` +
    text +
    `
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <!--[if mso]>
                                                </td>
                                                <![endif]-->
                                <!--[if mso]>
                                                </tr>
                                                </table>
                                                <![endif]-->
                            </td>
                        </tr>
                    </tbody>
                </table>`;
  return html;
}

function getNewsletterFeaturedEventHtml(event) {
  var html = `<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageCardBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody class="mcnImageCardBlockOuter">
        <tr>
            <td class="mcnImageCardBlockInner" valign="top" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnImageCardBottomContent" width="100%" style="background-color: #000;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%; border: 1px solid #333">
                    <tbody>`;

  if (event.media) {
    html +=
      `                        <tr>
                            <td class="mcnImageCardBottomImageContent" align="left" valign="top" style="padding-top: 0px;padding-right: 0px;padding-bottom: 0;padding-left: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                <a href="` +
      getAfterClassLink(event) +
      `" title="" class="" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <img alt="` +
      event.media[0].alt_text +
      ` " src="` +
      event.media[0].large_image +
      ` " width="564" style="max-width: 600px;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;" class="mcnImage">
                                </a>
                            </td>
                        </tr>`;
  }
  html +=
    `
                        <tr>
                            <td class="mcnTextContent" valign="top" style="padding: 9px 18px;color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: left;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;" width="546">
                                <h2 class="null" style="display: block;margin: 0;padding: 0;color: #ffffff;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;text-align: left;"><a href="` +
    getAfterClassLink(event) +
    `" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;">` +
    event.title +
    `</a></h2>` +
    getDateHtml(event) +
    `<br />` +
    getLocationHtml(event) +
    ` <a href="` +
    getAfterClassLink(event) +
    `" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFCD00;font-weight: normal;text-decoration: underline;">More...</a>
                               
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>`;
  return html;
}
function getNewsletterFooterTextHtml(text) {
  var html =
    ` <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                    <tbody class="mcnTextBlockOuter">
                        <tr>
                            <td valign="top" class="mcnTextBlockInner" style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                <!--[if mso]>
                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                            <tr>
                            <![endif]-->
                                <!--[if mso]>
                            <td valign="top" width="600" style="width:600px;">
                            <![endif]-->
                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%" class="mcnTextContentContainer">
                                    <tbody>
                                        <tr>
                                            <td valign="top" class="mcnTextContent" style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #ffffff;font-family: Helvetica;font-size: 16px;line-height: 150%;text-align: left;">
                                                ` +
    text +
    `
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <!--[if mso]>
                            </td>
                            <![endif]-->
                                <!--[if mso]>
                            </tr>
                            </table>
                            <![endif]-->
                            </td>
                        </tr>
                    </tbody>
                    </table>`;
  return html;
}

function getNewsletterNonfeaturedEventHtml(event) {
  var html =
    `<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnBoxedTextBlock" style="min-width:100%;">
                                    <!--[if gte mso 9]>
                                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%">
                                        <![endif]-->
                                    <tbody class="mcnBoxedTextBlockOuter">
                                        <tr>
                                            <td valign="top" class="mcnBoxedTextBlockInner">
                                                <!--[if gte mso 9]>
                                                    <td align="center" valign="top" ">
                                                    <![endif]-->
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnBoxedTextContentContainer">
                                                    <tbody>
                                                        <tr>
                                                            <td style="padding-top:9px; padding-left:18px; padding-bottom:9px; padding-right:18px;">
                                                                <table border="0" cellspacing="0" class="mcnTextContentContainer" width="100%" style="min-width: 100% !important;background-color: #000;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td valign="top" class="mcnTextContent" style="padding: 18px;color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: left;">
                                                                                <h2 class="null"><a href="` +
    getAfterClassLink(event) +
    `" target="_blank">` +
    event.title +
    `</a></h2>
                                                                                ` +
    getDateHtml(event) +
    `<br />` +
    getLocationHtml(event) +
    `

                                                                                 <a href="` +
    getAfterClassLink(event) +
    `" target="_blank">More...</a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!--[if gte mso 9]>
                                                    </td>
                                                    <![endif]-->
                                                <!--[if gte mso 9]>
                                                    </tr>
                                                    </table>
                                                    <![endif]-->
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>`;

  return html;
}
function getNewsletterFooterHtml() {
  var html = `</td>
                        </tr>
                        <tr>
                            <td valign="top" id="templateFooter">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                                    <tbody class="mcnTextBlockOuter">
                                        <tr>
                                            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                                                <!--[if mso]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                                                <!--[if mso]>
                <td valign="top" width="600" style="width:600px;">
                <![endif]-->
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                                                    <tbody>
                                                        <tr>
                                                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                                                                <p>Individuals with disabilities are encouraged to attend all University of Iowa–sponsored events. If you are a person with a disability who requires a reasonable accommodation in order to participate in this program, please contact the Office of the Vice President for Student Life in advance at <a href="tel:319-335-3557">319-335-3557</a> or <a href="mailto:vp-student-life@uiowa.edu">vp-student-life@uiowa.edu</a>.</p>
                                                                <p>
                                                                    After Class is a Divison of Student Life initiative meant to help students get involved, stay informed, and enjoy student life at Iowa.</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!--[if mso]>
                </td>
                <![endif]-->
                                                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnButtonBlock" style="min-width:100%;">
                                    <tbody class="mcnButtonBlockOuter">
                                        <tr>
                                            <td style="padding-top:0; padding-right:18px; padding-bottom:18px; padding-left:18px;" valign="top" align="center" class="mcnButtonBlockInner">
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnButtonContentContainer" style="border-collapse: separate !important;background-color: #000; border: 1px solid #FFCD00; text-transform: uppercase">
                                                    <tbody>
                                                        <tr>
                                                            <td align="center" valign="middle" class="mcnButtonContent" style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, Verdana, sans-serif; font-size: 16px; padding: 18px;">
                                                                <a class="mcnButton " title="Add Your Event" href="https://afterclass.uiowa.edu/add" target="_blank" style="font-weight: bold;letter-spacing: normal;line-height: 100%;text-align: center;text-decoration: none;color: #fff;">Add Your Event</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style="background:#FFCD00;background-color:#FFCD00;margin:0px auto;max-width:798px;">
                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFCD00;background-color:#FFCD00;width:100%;">
                            <tbody>
                              <tr>
                                <td style="direction:ltr;font-size:0px;padding:5px 0px;text-align:center;">
                                  <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:400px;"
            >
          <![endif]-->
                                  <div class="mj-column-px-400 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                    <div style="text-align: center;">
                                        <a href="https://www.facebook.com/uistudentlife"><img src="https://dispatch-cdn.its.uiowa.edu/dispatch/client/icons_facebook_blk.png" alt="Facebook" style="padding: 0 10px 0 10px;" width="30" height="30"></a>&nbsp;
                                        <a href="https://twitter.com/uistudentlife"><img src="https://dispatch-cdn.its.uiowa.edu/dispatch/client/icons_twitter_blk.png" alt="Twitter" style="padding: 0 10px 0 10px;" width="30" height="30"></a>&nbsp;
                                        <a href="https://www.instagram.com/uistudentlife/"><img src="https://dispatch-cdn.its.uiowa.edu/dispatch/client/icons_instagram_blk.png" alt="Instagram" style="padding: 0 10px 0 10px;" width="30" height="30"></a>&nbsp;



                                      </div><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">

                                    </table>
                                  </div>
                                  <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                                    <tbody class="mcnTextBlockOuter">
                                        <tr>
                                            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                                                <!--[if mso]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->

                                                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                    <!-- // END TEMPLATE -->
                </td>
            </tr>
        </table>

        <div style="background:#000000;background-color:#000000;margin:0px auto;max-width:798px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000000;background-color:#000000;width:100%;">
                          <tbody>
                            <tr>
                              <td style="direction:ltr;font-size:0px;padding:0;padding-bottom:0;padding-top:0;text-align:center;">
                                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:798px;"
            >
          <![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                      <tr>
                                        <td style="vertical-align:top;padding:0px 0px;">
                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                            <tbody><tr>
                                              <td align="center" style="font-size:0px;padding:30px 0px 15px 0px;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                  <tbody>
                                                    <tr>
                                                      <td style="width:120px;">
                                                        <a href="https://link.uiowa.edu/l/b3c1f98f-545d-44f6-a2e2-5f2535beccf4?m=3a65f0e7-6b90-41fe-873b-f44f6b346fac&amp;c=d.vpsc&amp;i=202011" target="_blank">
                                                          <img alt="The University of Iowa" height="auto" src="https://dispatch-cdn.its.uiowa.edu/images/ui/Block-IOWA-GOLD-ffcd00-nomargin.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="120">
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td align="center" class="footer" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
                                                <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:12px;line-height:20px;text-align:center;color:#ffffff;">
                                                  <mj-raw>
                                                  </mj-raw>
                                                  <mj-raw>

                                                  </mj-raw>

                                                  <mj-raw>

                                                  </mj-raw>
                                                  <mj-raw>
                                                  </mj-raw>
                                                  <p>
                                                  </p>
                                                  <p>
                                                     <a style="color: #fff; text-decoration: underline;" href="https://opsmanual.uiowa.edu/community-policies/nondiscrimination-statement">Nondiscrimination Statement</a>
                                                  </p>
                                                </div>
                                              </td>
                                            </tr>
                                              <tr>
                                                <td align="center" class="footer" style="font-size:0px;padding:10px 25px;padding-top:0px;word-break:break-word;">
                                                  <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#000000;">
                                                    <p></p>
                                                  </div>
                                                </td>
                                              </tr>
                                          </tbody></table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
    </center>
</body>

</html>
`;

  return html;
}

function getDateHtml(event) {
  var upcomingDates = [];
  upcomingDates = getUpcomingDates(event.event_instances);

  if (upcomingDates.length > 0) {
    return upcomingDates[0];
  } else {
    return "No upcoming dates.";
  }
}

function getLocationHtml(event) {
  var location = "";

  if (event.virtual) {
    location = "Virtual Event";
  } else {
    if (event.room_number) {
      location = event.room_number + ", ";
    }
    if (event.location_name) {
      location += event.location_name;
    }
  }
  return location;
}

export {
  getNewsletterHeaderHtml,
  getNewsletterHeaderTextHtml,
  getNewsletterFooterTextHtml,
  getNewsletterFeaturedEventHtml,
  getNewsletterNonfeaturedEventHtml,
  getNewsletterFooterHtml,
};
