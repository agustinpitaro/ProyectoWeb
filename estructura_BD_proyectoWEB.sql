create database FACTURACION;
use FACTURACION;

-- 

-- TABLE: USUARIO 

--

CREATE TABLE USUARIO(

    nro_usuario    INTEGER        NOT NULL AUTO_INCREMENT,

    username         VARCHAR(12)    NOT NULL,

    password       VARCHAR(12)    NOT NULL,

    CONSTRAINT PK_USUARIO PRIMARY KEY (nro_usuario)

)

;

-- 

-- TABLE: PRODUCTO 

--

CREATE TABLE PRODUCTO(

    nro_producto    INTEGER        NOT NULL AUTO_INCREMENT,

    titulo         VARCHAR(45)    NOT NULL,

    sinopsis         VARCHAR(45)    NOT NULL,
	
	imagen         VARCHAR(45)    NOT NULL,
	
	precio         DOUBLE    NOT NULL,
	
	genero         VARCHAR(20)    NOT NULL,
	
	genero_secundario         VARCHAR(20)    NOT NULL,
	
	link         VARCHAR(45)    NOT NULL,

    CONSTRAINT PK_PRODUCTO PRIMARY KEY (nro_producto)

)

;


-- 

-- TABLE: BIBLIOTECA 

--

CREATE TABLE BIBLIOTECA(

	nro_usuario    INTEGER        NOT NULL,

    nro_producto    INTEGER        NOT NULL,
	
	puntaje		INTEGER			NULL,

    CONSTRAINT PK_PRODUCTO PRIMARY KEY (nro_producto, nro_usuario)

)

;

ALTER TABLE BIBLIOTECA ADD CONSTRAINT FK_BIBLIOTECA_PRODUCTO
    FOREIGN KEY (nro_producto)

    REFERENCES PRODUCTO(nro_producto)

;

ALTER TABLE BIBLIOTECA ADD CONSTRAINT FK_BIBLIOTECA_USUARIO
    FOREIGN KEY (nro_usuario)

    REFERENCES USUARIO(nro_usuario)

;

-- 

-- TABLE: FACTURA 

--



CREATE TABLE FACTURA(

    nro_factura      INTEGER    NOT NULL AUTO_INCREMENT,

    fecha            DATE       NOT NULL,

    total_sin_iva    DOUBLE     NOT NULL,

    iva              DOUBLE     NOT NULL,

    total_con_iva    DOUBLE,

    nro_usuario      INTEGER    NOT NULL,

    CONSTRAINT PK_FACTURA PRIMARY KEY (nro_factura)

)

;



ALTER TABLE FACTURA ADD CONSTRAINT FK_FACTURA_USUARIO

    FOREIGN KEY (nro_usuario)

    REFERENCES USUARIO(nro_usuario)

;




-- 

-- TABLE: DETALLE_FACTURA 

--



CREATE TABLE DETALLE_FACTURA(

    nro_factura        INTEGER    NOT NULL,

    nro_item           INTEGER    NOT NULL,
	
	nro_producto    INTEGER    NOT NULL,

    CONSTRAINT PK_DETALLE_FACTURA PRIMARY KEY (nro_factura, nro_item)

)

;

ALTER TABLE DETALLE_FACTURA ADD CONSTRAINT FK_DETALLE_FACTURA_FACTURA 

    FOREIGN KEY (nro_factura)

    REFERENCES FACTURA(nro_factura)

;

ALTER TABLE DETALLE_FACTURA ADD CONSTRAINT FK_DETALLE_FACTURA_PRODUCTO
    FOREIGN KEY (nro_producto)

    REFERENCES PRODUCTO(nro_producto)

;









