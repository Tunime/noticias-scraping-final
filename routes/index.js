var express = require('express');
const request = require("tinyreq"),
		cheerio= require("cheerio");
var router = express.Router();
const base_url='http://radiouno.pe/';
const base_urld='http://radiocaplina.pe/';
//declarmos los arrays
const lista=[];
const descrip=[];
const date=[];
const img=[];

const clista=[];
const cdescrip=[];
const cdate=[];
const cimg=[];
//declaramo las variables que enviaremos
var imguno,imgdos,imgtres,imgcuatro,imgcinco,imgsiete,imgocho,imgnueve,imgdiez,imgonce;
var runo,rdos,rtres,rcuatro,rcinco,rseis,rsiete,rocho,rnueve,rdiez,ronce;
var duno,ddos,dtres,dcuatro,dcinco,dseis,dsiete,docho,dnueve,ddiez,donce;
var dtuno,dtdos,dttres,dtcuatro,dtcinco,dtseis,dtsiete,dtocho,dtnueve,dtdiez,dtonce;

var cimguno,cimgdos,cimgtres,cimgcuatro;
var cruno,crdos,crtres,crcuatro;
var cduno,cddos,cdtres,cdcuatro;
var cdtuno,cdtdos,cdttres,cdtcuatro;
//-----------------
//comensamodo con el scraper de diario caplina
request(base_urld, function (err, body) {
	 const $ = cheerio.load(body);
//comensamos a cargar las imagenes
$('img','.td_block_inner').each(function(i,elem){
		cimg[i]=$(this).attr('src');
		cimg.join(',');
	});
//ponemo los titulos de las noticias
	$('h3','.td_block_inner').each(function(i,elem){
		clista[i]=$(this).text();
		clista.join(',');
	});
//pondemos la decripcion de las noticias
	$('.td-excerpt','.td_block_inner').each(function(i,elem){
		cdescrip[i]=$(this).text();
		cdescrip.join(',');
	});
//sacamos las fechas de las noticias
	$('.td-post-date','.td_block_inner').each(function(i,elem){
		cdate[i]=$(this).text();
		cdate.join(',');
	});
	//declaramos todas las bariables para que podemos enviarlas
	
	cruno=clista[1];
	crdos=clista[2];
	crtres=clista[3];
	crcuatro=clista[4];
	console.log(crdos);
	cduno=cdescrip[1];
	cddos=cdescrip[2];
	cdtres=cdescrip[3];
	cdcuatro=cdescrip[4];

	cdtuno=cdate[1];
	cdtdos=cdate[2];
	cdttres=cdate[3];
	cdtcuatro=cdate[4];

	cimguno=cimg[1];
	cimgdos=cimg[2];
	cimgtres=cimg[3];
	cimgcuatro=cimg[4];
});

//comensamos a cargar la apgina y luego scrapeamos radio uno
request(base_url, function (err, body) {
	 const $ = cheerio.load(body);
//comensamos a cargar las imagenes
$('img','#izq').each(function(i,elem){
		img[i]=$(this).attr('src');
		img.join(',');
	});
//ponemo los titulos de las noticias
	$('h2','#izq').each(function(i,elem){
		lista[i]=$(this).text();
		lista.join(',');
	});
//pondemos la decripcion de las noticias
	$('.fijgro','#izq').each(function(i,elem){
		descrip[i]=$(this).text();
		descrip.join(',');
	});
//sacamos las fechas de las noticias
	$('.fijfec','#izq').each(function(i,elem){
		date[i]=$(this).text();
		date.join(',');
	});
	//declaramos todas las bariables para que podemos enviarlas
	runo=lista[1];
	rdos=lista[2];
	rtres=lista[3];
	rcuatro=lista[4];
	rcinco=lista[5];
	rseis= lista[6];
	rsiete=lista[7];
	rocho=lista[8];
	rnueve=lista[9];
	rdiez=lista[10];
	ronce=lista[11];

	duno=descrip[1];
	ddos=descrip[2];
	dtres=descrip[3];
	dcuatro=descrip[4];
	dcinco=descrip[5];
	dseis= descrip[6];
	dsiete=descrip[7];
	docho=descrip[8];
	dnueve=descrip[9];
	ddiez=descrip[10];
	donce=descrip[11];

	dtuno=date[1];
	dtdos=date[2];
	dttres=date[3];
	dtcuatro=date[4];
	dtcinco=date[5];
	dtseis= date[6];
	dtsiete=date[7];
	dtocho=date[8];
	dtnueve=date[9];
	dtdiez=date[10];
	dtonce=date[11];

	imguno=img[1];
	imgdos=img[2];
	imgtres=img[3];
	imgcuatro=img[4];
	imgcinco=img[5];
	imgseis= img[6];
	imgsiete=img[7];
	imgocho=img[8];
	imgnueve=img[9];
	imgdiez=img[10];
	imgonce=img[11];
});
//------------------


/* GET home page. */
//enviamos y renderisamos en la web
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Noticias' ,uno: rdos,duno: duno,dtuno:dtuno, imguno:imguno,  
  						dos: rdos,ddos:ddos,dtdos:dtdos,imgdos:imgdos,		
  						tres: rtres,dtres:dtres,dttres:dttres,imgtres:imgtres,
  						cuatro: rcuatro,dcuatro:dcuatro,dtcuatro:dtcuatro,imgcuatro:imgcuatro,
  						cinco: rcinco,dcinco:dcinco,dtcinco:dtcinco,imgcinco:imgcinco,
  						seis: rseis,dseis:dseis,dtseis:dtseis,imgseis:imgseis,
  						siete: rsiete,dsiete:dsiete,dtsiete:dtsiete,imgsiete:imgsiete,
  						ocho: rocho,docho:docho,dtocho:dtocho,imgocho:imgocho,
  						nueve: rnueve,dnueve:dnueve,dtnueve:dtnueve,imgnueve:imgnueve,
  						diez: rdiez,ddiez:ddiez,dtdiez:dtdiez,imgdiez:imgdiez,
  						once: ronce,donce:donce,dtonce:dtonce,imgonce:imgonce,
  						cuno: crdos,cduno: cduno,cdtuno:cdtuno, cimguno:cimguno,  
  						cdos: crdos,cddos:cddos,cdtdos:cdtdos,cimgdos:cimgdos,		
  						ctres: crtres,cdtres:cdtres,cdttres:cdttres,cimgtres:cimgtres,
  						ccuatro: crcuatro,cdcuatro:cdcuatro,cdtcuatro:cdtcuatro,cimgcuatro:cimgcuatro,});

});

module.exports = router;
