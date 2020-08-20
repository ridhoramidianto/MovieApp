## Movie Search React App

This project is the based on the [React MovieDB API Project](https://www.youtube.com/playlist?list=PL_kAgwZgMfWyZ6m8fDwdiwEarr_g6nFxz) by the [Jason Rivera](https://github.com/rivera1294/dbmovie). I wanted to share an updated version with slight modifications.

![](images/sample.gif)

Base Features:
- Built with the [React App](https://reactjs.org/) and [Materialize CSS](https://materializecss.com/)
- Movie database search feature using an external API
- Movie grid list feature
- Single page movie details

Updated Features:
- Using the [OMDb API](http://www.omdbapi.com/) for the movie retrieval.
- Only 5 items listed at per page.
- Slight changes on the CSS theme.

## Instructions
You can download the code and run node server with:
        
    npm start

Please keep in mind OMDb API limits the requests by 1000 per day, and you might not get any search result if api key reached daily limit. You can replace ```REACT_APP_API``` variable in the ```.env``` file with your api key to make sure the response is correct.

## Contribute
Feel free to submit an issue if you found any bug or want to request a feature. PRs are also welcome.

I will try to keep the code simple and consistent with the tutorial, so please create an issue before any PR request.

## Known Issues
- #1 Error is thrown when search query does not return any result, because of the single page item limit.

## Resources
The base app and code is courtesy of the [Jason Rivera](https://github.com/rivera1294/). Additional features are implemented by myself, possibly more to come. 

If you have copyright on any part of the code and want it removed, please contact me first with your request and I'll fix the code or take the repository down.
