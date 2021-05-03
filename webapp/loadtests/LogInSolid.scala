
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class logInSolid extends Simulation {

	val httpProtocol = http
		.baseUrl("https://radarines2awebapp.herokuapp.com")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sat, 01 May 2021 16:51:35 GMT",
		"If-None-Match" -> """W/"c5b-17928d7b1d8"""",
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
		"If-Modified-Since" -> "Sat, 01 May 2021 16:51:35 GMT",
		"If-None-Match" -> """W/"a48-17928d7b1d8"""",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_3 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Sat, 01 May 2021 16:50:15 GMT",
		"If-None-Match" -> """W/"1ec-17928d67958"""",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_4 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Sat, 01 May 2021 16:51:35 GMT",
		"If-None-Match" -> """W/"c5b-17928d7b1d8"""",
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "same-origin",
		"Sec-Fetch-User" -> "?1",
		"Upgrade-Insecure-Requests" -> "1",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_7 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sat, 01 May 2021 16:51:35 GMT",
		"If-None-Match" -> """W/"c5b-17928d7b1d8"""",
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "same-origin",
		"Upgrade-Insecure-Requests" -> "1",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_8 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Sat, 01 May 2021 16:51:35 GMT",
		"If-None-Match" -> """W/"9f2-17928d7b1d8"""",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_9 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_10 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Sat, 01 May 2021 16:51:35 GMT",
		"If-None-Match" -> """W/"3c8-17928d7b1d8"""",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_11 = Map(
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

    val uri1 = "https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel"
    val uri3 = "https://fonts.googleapis.com/icon"

	val scn = scenario("logInSolid")
		.exec(http("request_0")
			.get("/")
			.headers(headers_0)
			.resources(http("request_1")
			.get(uri3 + "?family=Material+Icons")
			.headers(headers_1),
            http("request_2")
			.get("/static/media/logo.6ce24c58.svg")
			.headers(headers_2),
            http("request_3")
			.get("/manifest.json")
			.headers(headers_3)))
		.pause(1)
		.exec(http("request_4")
			.get("/login")
			.headers(headers_4)
			.resources(http("request_5")
			.get(uri3 + "?family=Material+Icons")
			.headers(headers_1),
            http("request_6")
			.get("/manifest.json")
			.headers(headers_3)))
		.pause(16)
		.exec(http("request_7")
			.get("/home")
			.headers(headers_7)
			.resources(http("request_8")
			.get("/static/media/solid.da7b4f47.svg")
			.headers(headers_8),
            http("request_9")
			.get("/static/media/document.e7a7d885.svg")
			.headers(headers_9),
            http("request_10")
			.get("/static/media/github.255db585.svg")
			.headers(headers_10),
            http("request_11")
			.post(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&VER=8&RID=95981&CVER=22&X-HTTP-Session-Id=gsessionid&%24httpHeaders=X-Goog-Api-Client%3Agl-js%2F%20fire%2F8.3.1%0D%0AContent-Type%3Atext%2Fplain%0D%0A&zx=qerjy0iabu4x&t=1")
			.headers(headers_11)
			.formParam("count", "1")
			.formParam("ofs", "0")
			.formParam("req0___data__", """{"database":"projects/radarin-85e68/databases/(default)","addTarget":{"query":{"structuredQuery":{"from":[{"collectionId":"users"}],"orderBy":[{"field":{"fieldPath":"__name__"},"direction":"ASCENDING"}]},"parent":"projects/radarin-85e68/databases/(default)/documents"},"targetId":2}}"""),
            http("request_12")
			.get("/manifest.json")
			.headers(headers_3)))

	setUp(
		scn.inject(atOnceUsers(5))
    ).protocols(httpProtocol)
}