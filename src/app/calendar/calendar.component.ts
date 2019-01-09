import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
declare var jQuery: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function($) { 
      $( ".datepicker" ).datepicker({
        dateFormat: "yy-mm-dd",
        dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
        monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
        showOtherMonths: true,
        selectOtherMonths: true,
        yearSuffix:'년',
        minDate:0,
        showMonthAfterYear:true
      });

      $( ".calendar" ).datepicker({
        dateFormat: "yy-mm-dd",
        dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
        monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
        showOtherMonths: true,
        selectOtherMonths: true,
        yearSuffix:'년',
        minDate:0,
        showMonthAfterYear:true
      });


      /* date range */
      $('#start').click(function(){
        $( ".end" ).hide();
        $( ".start" ).show();
      });
      $('#end').click(function(){
        $( ".start" ).hide();
        $( ".end" ).show();
      });
      $( ".start" ).datepicker({
        dateFormat: "yy-mm-dd",
        dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
        monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
        showOtherMonths: true,
        selectOtherMonths: true,
        numberOfMonths: 2,
        yearSuffix:'년',
        minDate:0,
        showMonthAfterYear:true,
        onSelect:function(){
          var selectedStartDate = $(this).val();
          $('#start').val(selectedStartDate);
          $( ".start" ).hide();
          $( ".end" ).show();
        }
      });
      $( ".end" ).datepicker({
        dateFormat: "yy-mm-dd",
        dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
        monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
        showOtherMonths: true,
        selectOtherMonths: true,
        numberOfMonths: 2,
        yearSuffix:'년',
        minDate:0,
        showMonthAfterYear:true,
        onSelect:function(){
          var selectedEndDate = $(this).val();
          $('#end').val(selectedEndDate);
          $( ".end" ).hide();
        }
      });
       /*//date range */

      /* range */
      var date01;
      var date02;
      var hoverDate;
      var coloredDates;

       
      $('#date01').click(function(){
        $( ".range01" ).show();
        $( ".range01" ).datepicker("option", "onSelect", function(){
            date01 = $(this).val();
            $('#date01').val(date01);
            coloredDates = $('.ui-datepicker td');
            $( ".range01" ).hide();
          });
      });
      $('#date02').click(function(){
        $( ".range02" ).show();
        //$('.range02').datepicker();
        $( ".range02" ).datepicker('option', {
          minDate:date01,
          onSelect: function(){
            date02 = $(this).val();
            $('#date02').val(date02);
            $( ".range02" ).hide();
          },
          beforeShowDay: function(date) {
            getHoverDate();
            date= getDDate(date);
            console.log("date=",date);
            return [true, getdate01 && (gethoverDate && date >= getdate01 && date <= gethoverDate) ? "sejour" : ""];
          }
        });
      });
      
      $( ".range01, .range02" ).datepicker({
        dateFormat: "yy-mm-dd",
        dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
        monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
        showOtherMonths: true,
        selectOtherMonths: true,
        numberOfMonths: 2,
        yearSuffix:'년',
        minDate:0,
        showMonthAfterYear:true,
      });
      var parseddate01;
      var parsedhoverDate;
      var gethoverDate;
      var getdate01;
function getHoverDate(){
      $('.range02').delegate('.ui-datepicker td', 'mouseover', function(){ 

        var year = $(this).data('year');
        var month = ($(this).data('month')+1);
        var date = $('a',this).html();
        if ((date+"").length < 2) {
          date = "0" + date;
        }
        // if ((month+"").length < 2) {
        //   month = "0" + month;
        // }

          // get date from hovered cell 
          //hoverDate = $(this).data('year')+'-'+($(this).data('month')+1)+'-'+$('a',this).html(); 
          hoverDate = year + month + date;
          gethoverDate = eval(hoverDate);
          // parse hovered date into milliseconds 
          parsedhoverDate = $.datepicker.parseDate('yy-mm-dd', hoverDate); 
          parseddate01 = $.datepicker.parseDate('yy-mm-dd', date01);
          //var hoverDateArray= hoverDate.split("-");
          //hoverDateArray = new Date(hoverDate[0], hoverDate[1], hoverDate[2]);
          date01= date01.split("-");
          //getdate01 = getDDate(date01);
          //var date01Array = new Date(date01[0], date01[1], date01[2]);
          getdate01 = date01[0].toString() + date01[1].toString() +date01[2].toString();

          console.log("hoverDate = ",hoverDate);
          console.log("gethoverDate = ",gethoverDate);
          console.log("parsedhoverDate = ",parsedhoverDate);
          console.log("date01 = ", date01);
          console.log("parseddate01 = ", parseddate01);
          console.log("date01 = ", getdate01);
          
          //coloredDates = coloredDates.data('year')+'-'+(coloredDates.data('month')+1)+'-'+ coloredDates.children('a').html();
          //coloredDates = getdatedata(coloredDates);
          function parsing(beforeParsed) {
            var parsed = $.datepicker.parseDate('yy-mm-dd', beforeParsed); 
            return parsed;
          }
          //console.log("coloredDates = ", coloredDates);
          //console.log(parsing(coloredDates));
          function getdatedata(this){
            $(this).data('year')+'-'+($(this).data('month')+1)+'-'+$('a',this).html();
          }
          //var parsedcoloredDates = $.datepicker.parseDate('yy-mm-dd', coloredDates);
          //console.log("date = ", date(date01));
          // if (parsedhoverDate > parsing(coloredDates) ) {
          //   coloredDates.addClass('sejour'); 
          //   console.log("addClass success!");
          //  } else { 
          //   coloredDates.removeClass('sejour'); 
          //  } 
  
          // $( ".range02" ).datepicker('option', {
          //   minDate:date01,
          //   onSelect: function(){
          //     date02 = $(this).val();
          //     $('#date02').val(date02);
          //     $( ".range02" ).hide();
          //   },
          //   beforeShowDay: function(date) {
          //     //getHoverDate();
          //     getDDate(date);
          //     console.log("date=",date);
          //     return [true, getdate01 && (gethoverDate && date >= getdate01 && date <= gethoverDate) ? "sejour" : ""];
          //   }
          // });


        });
}


      function getDDate(d){
        // d = $.datepicker.parseDate('yy-mm-dd', d);
        var dyear = d.getFullYear().toString();
        var dmonth = (d.getMonth()+1).toString();
        var ddate = d.getDate().toString();
        if ((dmonth+"").length < 2) {
          dmonth = "0" + dmonth;
        }
        if ((ddate+"").length < 2) {
          ddate = "0" + ddate;
        }
        d= dyear+dmonth+ddate;
        console.log("dyear=", dyear);
        console.log("dmonth=", dmonth);
        console.log("ddate=", ddate);
        console.log("d=", d);
        return d;
      }
      /*// range */


       var start_date = null, end_date = null;
       var timestamp_start_date = null, timestamp_end_date = null;
       var $input_start_date = null, $input_end_date = null;
       
       function getDateClass(date, start, end){
         if(end != null && start != null){
           if(date > start && date < end)
             return [ true, "sejour", "Séjour" ];
         }
         
         if(date == start)
           return [ true, "start", "Début de votre séjour" ];
         if(date == end)
           return [ true, "end", "Fin de votre séjour" ];
         
         return false;
       }
       
       function datepicker_draw_nb_nights(){
         var $datepicker = jQuery("#ui-datepicker-div");
         setTimeout(function(){
           if(start_date != null && end_date != null){
             var $qty_days_stay = jQuery("<div />", { class: "ui-datepicker-stay-duration" });
             var qty_nights_stay = get_days_difference(timestamp_start_date, timestamp_end_date);
             $qty_days_stay.text(qty_nights_stay + " nights stay");
             $qty_days_stay.appendTo($datepicker);
           }
         });
       }
       
       var options_start_date = {
          showAnim: false,
          constrainInput: true,
          numberOfMonths: 2,
          showOtherMonths: true,
          beforeShow: function(input, datepicker){
            datepicker_draw_nb_nights();
          },
          beforeShowDay: function(date){
           // 0: published
           // 1: class
           // 2: tooltip
           var timestamp_date = date.getTime();
           var result = getDateClass(timestamp_date, timestamp_start_date, timestamp_end_date);
           if(result != false)
             return result;
           
           return [true, "", ""];
           // return [ true, "chocolate", "Chocolate! " ];
          },
          onSelect: function(date_string, datepicker){
           // this => input
           start_date = $input_start_date.datepicker("getDate");
           timestamp_start_date = start_date.getTime();
          },
          onClose: function(){
           if(end_date != null){
             if(timestamp_start_date >= timestamp_end_date || end_date == null){
               $input_end_date.datepicker("setDate", null);
               end_date = null;
               timestamp_end_date = null;
               $input_end_date.datepicker("show");
               return;
             }
            }
           if(start_date != null && end_date == null)
             $input_end_date.datepicker("show");
          }
       };
       var options_end_date = {
          showAnim: false,
          constrainInput: true,
          numberOfMonths: 2,
          showOtherMonths: true,
          beforeShow: function(input, datepicker){
           datepicker_draw_nb_nights();
          },
          beforeShowDay: function(date){
           var timestamp_date = date.getTime();
           var result = getDateClass(timestamp_date, timestamp_start_date, timestamp_end_date);
           if(result != false)
              return result;
              return [ true, "", "Chocolate !" ];
            },
          onSelect: function(date_string, datepicker){
           // this => input
           end_date = $input_end_date.datepicker("getDate");
           timestamp_end_date = end_date.getTime();
          },
          onClose: function(){
           if(end_date == null)
             return;
           if(timestamp_end_date <= timestamp_start_date || start_date == null){
             $input_start_date.datepicker("setDate", null);
             start_date = null;
             timestamp_start_date = null;
             $input_start_date.datepicker("show");
           }
         }
       };
       
       $input_start_date = jQuery("#start-date");
       $input_end_date = jQuery("#end-date");
       
       $input_start_date.datepicker(options_start_date);
       $input_end_date.datepicker(options_end_date);
       
       function get_days_difference(start_date, end_date){
         return Math.floor(end_date - start_date) / (1000*60*60*24);
       }



    });
  }



}
