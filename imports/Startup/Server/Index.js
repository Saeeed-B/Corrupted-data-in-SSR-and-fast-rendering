

//-------------------- SSR -----------------------\\
    import React from "react";
	import { StaticRouter as Router } from "react-router-dom"
    import { FastRender  } from "meteor/staringatlights:fast-render"
    import { renderToString } from "react-dom/server"
    import { HelmetProvider } from 'react-helmet-async'
    import { LoadableCaptureProvider, preloadAllLoadables } from 'meteor/npdev:react-loadable'
	import Routes from "../../Routes/Routes";
	preloadAllLoadables().then(() => FastRender.onPageLoad(sink => {
		const context = {};
		const loadableHandle = {};
		const helmetContext = {};

		const html = renderToString(
			<LoadableCaptureProvider handle={loadableHandle}>
				<HelmetProvider context={helmetContext}>
					<Router location={sink.request.url} context={context}>
						<Routes />
					</Router>
				</HelmetProvider>
			</LoadableCaptureProvider>
		);

		const { helmet } = helmetContext;
		sink.appendToHead(helmet.meta.toString());
		sink.appendToHead(helmet.link.toString());
		sink.appendToHead(helmet.title.toString());
		sink.renderIntoElementById('App', html)
	}))

//------------------- End SSR ---------------------\\


//------------------- Collections -------------------\\

	import '../../Collections/Article';


//----------------- End Collections ------------------\\



//------------------- Methods -------------------\\

	import '../../Methods/NewArticle_Method';

//----------------- End Methods ------------------\\



//------------------- Publish -------------------\\

	import '../../Publish/Artices';

//----------------- End Publish ------------------\\



