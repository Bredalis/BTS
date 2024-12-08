
from flask import Flask, render_template
from jinja2 import TemplateNotFound

def pagina_bts():
    app = Flask(__name__)

    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/biografia-y-cronologia")
    def biografia_y_cronologia():
        return render_template("Biografia_Y_Cronologia.html")

    @app.route("/logros-y-premios")
    def logros_y_premios():
        return render_template("Logros_Y_premios.html")

    @app.route("/<nombre_integrante>")
    def integrantes(nombre_integrante):
        try:
            return render_template(nombre_integrante + ".html")
        except TemplateNotFound:
            return render_template("404.html"), 404
    
    @app.route("/discografia")
    def discografia():
        return render_template("Discografia.html")

    return app

if __name__ == "__main__":
    app = pagina_bts()
    app.run()