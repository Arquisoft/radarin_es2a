
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class LogIn extends Simulation {

	val httpProtocol = http
		.baseUrl("https://radarines2awebapp.herokuapp.com")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sat, 01 May 2021 08:49:49 GMT",
		"If-None-Match" -> """W/"c5b-179271e9fc8"""",
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
		"If-Modified-Since" -> "Sat, 01 May 2021 08:49:49 GMT",
		"If-None-Match" -> """W/"a48-179271e9fc8"""",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_3 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Sat, 01 May 2021 08:48:06 GMT",
		"If-None-Match" -> """W/"1ec-179271d0d70"""",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_4 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Sat, 01 May 2021 08:49:49 GMT",
		"If-None-Match" -> """W/"c5b-179271e9fc8"""",
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "same-origin",
		"Sec-Fetch-User" -> "?1",
		"Upgrade-Insecure-Requests" -> "1",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_7 = Map(
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

	val headers_9 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Sat, 01 May 2021 08:49:49 GMT",
		"If-None-Match" -> """W/"9f2-179271e9fc8"""",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_11 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_15 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Sat, 01 May 2021 08:49:49 GMT",
		"If-None-Match" -> """W/"3c8-179271e9fc8"""",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_17 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"If-Modified-Since" -> "Sat, 01 May 2021 08:49:49 GMT",
		"If-None-Match" -> """W/"811-179271e9fc8"""",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_23 = Map(
		"accept" -> "*/*",
		"accept-encoding" -> "gzip, deflate, br",
		"accept-language" -> "es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6",
		"content-type" -> "text/plain;charset=UTF-8",
		"origin" -> "https://radarines2awebapp.herokuapp.com",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0",
		"sec-fetch-dest" -> "empty",
		"sec-fetch-mode" -> "no-cors",
		"sec-fetch-site" -> "cross-site",
		"x-client-data" -> "CKq1yQEIkLbJAQimtskBCMS2yQEIipLKAQipncoBCPjHygEI5JzLAQipncsBCKCgywEIraDLAQ==")

    val uri1 = "https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel"
    val uri3 = "https://fonts.googleapis.com/icon"

	val scn = scenario("LogIn")
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
		.pause(7)
		.exec(http("request_7")
			.post(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&VER=8&RID=11819&CVER=22&X-HTTP-Session-Id=gsessionid&%24httpHeaders=X-Goog-Api-Client%3Agl-js%2F%20fire%2F8.3.1%0D%0AContent-Type%3Atext%2Fplain%0D%0A&zx=f39z5cnj6kdl&t=1")
			.headers(headers_7)
			.formParam("count", "1")
			.formParam("ofs", "0")
			.formParam("req0___data__", """{"database":"projects/radarin-85e68/databases/(default)","addTarget":{"query":{"structuredQuery":{"from":[{"collectionId":"users"}],"orderBy":[{"field":{"fieldPath":"__name__"},"direction":"ASCENDING"}]},"parent":"projects/radarin-85e68/databases/(default)/documents"},"targetId":2}}""")
			.resources(http("request_8")
			.post(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&VER=8&gsessionid=4jAwF2qlG7bzM7WTHONQ-M-D9zlBMIXIgm91azmXMI4&SID=XyBQHiN8pHqo9Of5TkLyRA&RID=11820&AID=24&zx=gbkiz11e2xyr&t=1")
			.headers(headers_7)
			.formParam("count", "1")
			.formParam("ofs", "1")
			.formParam("req0___data__", """{"database":"projects/radarin-85e68/databases/(default)","removeTarget":2}"""),
            http("request_9")
			.get("/static/media/solid.da7b4f47.svg")
			.headers(headers_9),
            http("request_10")
			.get("/home")
			.headers(headers_0),
            http("request_11")
			.get("/static/media/github.255db585.svg")
			.headers(headers_11),
            http("request_12")
			.get("/static/media/document.e7a7d885.svg")
			.headers(headers_11),
            http("request_13")
			.get(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&gsessionid=4jAwF2qlG7bzM7WTHONQ-M-D9zlBMIXIgm91azmXMI4&VER=8&RID=rpc&SID=XyBQHiN8pHqo9Of5TkLyRA&CI=0&AID=0&TYPE=xmlhttp&zx=uok9f9jiiu8&t=1")
			.headers(headers_7),
            http("request_14")
			.get(uri3 + "?family=Material+Icons")
			.headers(headers_1),
            http("request_15")
			.get("/static/media/github.255db585.svg")
			.headers(headers_15),
            http("request_16")
			.get("/static/media/solid.da7b4f47.svg")
			.headers(headers_9),
            http("request_17")
			.get("/static/media/document.e7a7d885.svg")
			.headers(headers_17),
            http("request_18")
			.post(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&VER=8&RID=48028&CVER=22&X-HTTP-Session-Id=gsessionid&%24httpHeaders=X-Goog-Api-Client%3Agl-js%2F%20fire%2F8.3.1%0D%0AContent-Type%3Atext%2Fplain%0D%0A&zx=2dgf2dw0xsdg&t=1")
			.headers(headers_7)
			.formParam("count", "1")
			.formParam("ofs", "0")
			.formParam("req0___data__", """{"database":"projects/radarin-85e68/databases/(default)","addTarget":{"query":{"structuredQuery":{"from":[{"collectionId":"admins"}],"orderBy":[{"field":{"fieldPath":"__name__"},"direction":"ASCENDING"}]},"parent":"projects/radarin-85e68/databases/(default)/documents"},"targetId":2}}"""),
            http("request_19")
			.get("/manifest.json")
			.headers(headers_3),
            http("request_20")
			.post(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&VER=8&gsessionid=DLhkRASm6f9LXQQZE5QHUKWn4P5S902EIeTKhEwUDKk&SID=0pE8-yEwLSzClVtkF8Dnnw&RID=48029&AID=4&zx=nsw7g82um2h&t=1")
			.headers(headers_7)
			.formParam("count", "1")
			.formParam("ofs", "1")
			.formParam("req0___data__", """{"database":"projects/radarin-85e68/databases/(default)","removeTarget":2}"""),
            http("request_21")
			.get(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&gsessionid=DLhkRASm6f9LXQQZE5QHUKWn4P5S902EIeTKhEwUDKk&VER=8&RID=rpc&SID=0pE8-yEwLSzClVtkF8Dnnw&CI=0&AID=0&TYPE=xmlhttp&zx=vq5g03cutfgb&t=1")
			.headers(headers_7),
            http("request_22")
			.get(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&gsessionid=DLhkRASm6f9LXQQZE5QHUKWn4P5S902EIeTKhEwUDKk&VER=8&RID=rpc&SID=0pE8-yEwLSzClVtkF8Dnnw&CI=0&AID=7&TYPE=xmlhttp&zx=b7b9dqloikv2&t=1")
			.headers(headers_7),
            http("request_23")
			.post(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&VER=8&gsessionid=DLhkRASm6f9LXQQZE5QHUKWn4P5S902EIeTKhEwUDKk&SID=0pE8-yEwLSzClVtkF8Dnnw&RID=48030&TYPE=terminate&zx=i4yv4u1s2qpo")
			.headers(headers_23)))

	setUp(
      scn.inject(constantUsersPerSec(8) during (5 seconds) randomized)
    ).protocols(httpProtocol)
}