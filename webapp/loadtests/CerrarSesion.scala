
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class CerrarSesion extends Simulation {

	val httpProtocol = http
		.baseUrl("https://radarines2awebapp.herokuapp.com")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Mon, 03 May 2021 07:56:14 GMT",
		"If-None-Match" -> """W/"c5b-179313a4930"""",
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "same-origin",
		"Sec-Fetch-User" -> "?1",
		"Upgrade-Insecure-Requests" -> "1",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_1 = Map(
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_2 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Mon, 03 May 2021 07:56:14 GMT",
		"If-None-Match" -> """W/"9f2-179313a4930"""",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_3 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Mon, 03 May 2021 07:56:14 GMT",
		"If-None-Match" -> """W/"3c8-179313a4930"""",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_4 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Mon, 03 May 2021 07:56:14 GMT",
		"If-None-Match" -> """W/"811-179313a4930"""",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_5 = Map(
		"accept" -> "*/*",
		"accept-encoding" -> "gzip, deflate, br",
		"accept-language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"origin" -> "https://radarines2awebapp.herokuapp.com",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0",
		"sec-fetch-dest" -> "empty",
		"sec-fetch-mode" -> "cors",
		"sec-fetch-site" -> "cross-site",
		"x-client-data" -> "CKq1yQEIkLbJAQimtskBCMS2yQEIipLKAQipncoBCPjHygEI5JzLAQipncsBCKCgywEIraDLAQ==")

	val headers_6 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Mon, 03 May 2021 07:54:15 GMT",
		"If-None-Match" -> """W/"1ec-17931387858"""",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_11 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Sun, 02 May 2021 23:56:42 GMT",
		"If-None-Match" -> """W/"c5b-1792f834290"""",
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "same-origin",
		"Sec-Fetch-User" -> "?1",
		"Upgrade-Insecure-Requests" -> "1",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_14 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Mon, 03 May 2021 07:56:14 GMT",
		"If-None-Match" -> """W/"a48-179313a4930"""",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_15 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Mon, 03 May 2021 07:56:14 GMT",
		"If-None-Match" -> """W/"c5b-179313a4930"""",
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "same-origin",
		"Upgrade-Insecure-Requests" -> "1",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

    val uri1 = "https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel"
    val uri3 = "https://fonts.googleapis.com/icon"

	val scn = scenario("CerrarSesion")
		.exec(http("request_0")
			.get("/home")
			.headers(headers_0)
			.resources(http("request_1")
			.get(uri3 + "?family=Material+Icons")
			.headers(headers_1),
            http("request_2")
			.get("/static/media/solid.da7b4f47.svg")
			.headers(headers_2),
            http("request_3")
			.get("/static/media/github.255db585.svg")
			.headers(headers_3),
            http("request_4")
			.get("/static/media/document.e7a7d885.svg")
			.headers(headers_4),
            http("request_5")
			.post(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&VER=8&RID=38626&CVER=22&X-HTTP-Session-Id=gsessionid&%24httpHeaders=X-Goog-Api-Client%3Agl-js%2F%20fire%2F8.3.1%0D%0AContent-Type%3Atext%2Fplain%0D%0A&zx=mycssibrg7nv&t=1")
			.headers(headers_5)
			.formParam("count", "2")
			.formParam("ofs", "0")
			.formParam("req0___data__", """{"database":"projects/radarin-85e68/databases/(default)","addTarget":{"query":{"structuredQuery":{"from":[{"collectionId":"admins"}],"orderBy":[{"field":{"fieldPath":"__name__"},"direction":"ASCENDING"}]},"parent":"projects/radarin-85e68/databases/(default)/documents"},"targetId":2}}""")
			.formParam("req1___data__", """{"database":"projects/radarin-85e68/databases/(default)","addTarget":{"query":{"structuredQuery":{"from":[{"collectionId":"amigos"}],"orderBy":[{"field":{"fieldPath":"__name__"},"direction":"ASCENDING"}]},"parent":"projects/radarin-85e68/databases/(default)/documents"},"targetId":4}}"""),
            http("request_6")
			.get("/manifest.json")
			.headers(headers_6),
            http("request_7")
			.post(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&VER=8&gsessionid=W5tGakVU4p9GMRHlMYz12DPCJC1smuUumQM9Xwa-LcA&SID=S7zOweUeGSvCTcBbN_WqyA&RID=38627&AID=18&zx=zifhtmbaw3cu&t=1")
			.headers(headers_5)
			.formParam("count", "1")
			.formParam("ofs", "2")
			.formParam("req0___data__", """{"database":"projects/radarin-85e68/databases/(default)","removeTarget":2}"""),
            http("request_8")
			.post(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&VER=8&gsessionid=W5tGakVU4p9GMRHlMYz12DPCJC1smuUumQM9Xwa-LcA&SID=S7zOweUeGSvCTcBbN_WqyA&RID=38628&AID=18&zx=s1zdpo1t6ulm&t=1")
			.headers(headers_5)
			.formParam("count", "1")
			.formParam("ofs", "3")
			.formParam("req0___data__", """{"database":"projects/radarin-85e68/databases/(default)","addTarget":{"query":{"structuredQuery":{"from":[{"collectionId":"locations"}],"orderBy":[{"field":{"fieldPath":"__name__"},"direction":"ASCENDING"}]},"parent":"projects/radarin-85e68/databases/(default)/documents"},"targetId":6}}"""),
            http("request_9")
			.post(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&VER=8&gsessionid=W5tGakVU4p9GMRHlMYz12DPCJC1smuUumQM9Xwa-LcA&SID=S7zOweUeGSvCTcBbN_WqyA&RID=38629&AID=37&zx=hbl3vjg1d6op&t=1")
			.headers(headers_5)
			.formParam("count", "1")
			.formParam("ofs", "4")
			.formParam("req0___data__", """{"database":"projects/radarin-85e68/databases/(default)","addTarget":{"query":{"structuredQuery":{"from":[{"collectionId":"users"}],"orderBy":[{"field":{"fieldPath":"__name__"},"direction":"ASCENDING"}]},"parent":"projects/radarin-85e68/databases/(default)/documents"},"targetId":8}}"""),
            http("request_10")
			.post(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&VER=8&gsessionid=W5tGakVU4p9GMRHlMYz12DPCJC1smuUumQM9Xwa-LcA&SID=S7zOweUeGSvCTcBbN_WqyA&RID=38630&AID=67&zx=oul8ue9t44dt&t=1")
			.headers(headers_5)
			.formParam("count", "1")
			.formParam("ofs", "5")
			.formParam("req0___data__", """{"database":"projects/radarin-85e68/databases/(default)","removeTarget":8}""")))
		.pause(7)
		.exec(http("request_11")
			.get("/logout")
			.headers(headers_11)
			.resources(http("request_12")
			.get(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&gsessionid=W5tGakVU4p9GMRHlMYz12DPCJC1smuUumQM9Xwa-LcA&VER=8&RID=rpc&SID=S7zOweUeGSvCTcBbN_WqyA&CI=0&AID=0&TYPE=xmlhttp&zx=kpt3q9924sl&t=1")
			.headers(headers_5),
            http("request_13")
			.get(uri3 + "?family=Material+Icons")
			.headers(headers_1),
            http("request_14")
			.get("/static/media/logo.6ce24c58.svg")
			.headers(headers_14),
            http("request_15")
			.get("/")
			.headers(headers_15),
            http("request_16")
			.get("/manifest.json")
			.headers(headers_6),
            http("request_17")
			.get(uri3 + "?family=Material+Icons")
			.headers(headers_1),
            http("request_18")
			.get("/static/media/logo.6ce24c58.svg")
			.headers(headers_14),
            http("request_19")
			.get("/manifest.json")
			.headers(headers_6)))

	setUp(scn.inject(atOnceUsers(30))).protocols(httpProtocol)
}