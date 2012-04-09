/**
 * jQuery gtSelect plugin
 * @author Gerson Thiago <http://www.gersonthiago.com>
**/
(function(a){a.fn.gtselect=function(b){var d={speed:200,width:300,linkRedirect:false},e=100;function c(l,g){this.el=a(l);this.options=a.extend({},d,g);this.el.wrap('<div class="gtSelect" data-status="disabled" />');this.select=a(l).parent(".gtSelect");this.el.css("display","none");var j=this.el.attr("name");this.el.attr("name",j+"Old");var k="",n=this.select.find("option"),f="",m={value:n[0].getAttribute('value'),text:n[0].text};for(var h=0;h<n.length;h++){if(n[h].getAttribute("selected")!=null){m={value:n[h].getAttribute("value"),text:n[h].text}}f+='<li data-val="'+n[h].getAttribute("value")+'">'+n[h].text+"</li>"}k+='<p class="activeOption">'+m.text+'</p><div class="listSelect" style="width:'+this.options.width+'"><ul>'+f+'</ul></div><span class="arrow arrowDown">Down</span><input type="hidden" name="'+j+'" value="'+m.value+'" />';this.select.css({width:this.options.width,zIndex:e}).append(k);this.appendEvents();e--}c.prototype.appendEvents=function(){var f=this.select,i=this.options,g="";var h=function(j,k){f.find("input").val(j);f.find(".activeOption").text(k)};f.bind("mouseenter mouseleave click",function(l){var k=a(this),j=k.attr("data-status");if(l.type=="click"){if(j=="disabled"){k.find(".arrow").removeClass("arrowDown").addClass("arrowUp").text("Up");k.find(".listSelect").slideDown(i.speed);k.attr("data-status","enabled")}else{k.find(".listSelect").slideUp(i.speed);k.find(".arrow").removeClass("arrowUp").addClass("arrowDown").text("Down");if(l.target.nodeName.toLowerCase()=="li"){if(i.linkRedirect){if(l.target.getAttribute("data-val")!=""){location.href=l.target.getAttribute("data-val")}}else{h(a(l.target).attr("data-val"),a(l.target).text())}}k.attr("data-status","disabled")}}else{if(l.type=="mouseenter"){if(j=="enabled"){clearTimeout(g)}}else{if(j=="enabled"){g=setTimeout(function(){f.trigger("click")},1000)}}}})};return this.each(function(){new c(this,b)})}})(jQuery);