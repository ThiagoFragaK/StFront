export default function (context) {
    if(context.store.state.auth.steamID === undefined) {
        context.redirect("/");
    }
}