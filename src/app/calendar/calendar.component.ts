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
      //var selectedStartDate;
      //var selectedEndDate;
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

       
      $('#date01').click(function(){
        $( ".range" ).show();
        $( ".range" ).datepicker("option", "onSelect", function(){
            date01 = $(this).val();
            $('#date01').val(date01);
            $( ".range" ).hide();
          });
      });
      $('#date02').click(function(){
        $( ".range" ).show();
        $( ".range" ).datepicker("option", "onSelect", function(){
            date02 = $(this).val();
            $('#date02').val(date02);
            $( ".range" ).hide();
            
          });
      });
      
      $( ".range" ).datepicker({
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

      $('.range').delegate('.ui-datepicker td', 'mouseover', function(){ 
          // get date from hovered cell 
          hoverDate = $(this).data('year')+'-'+($(this).data('month')+1)+'-'+$('a',this).html(); 
          // parse hovered date into milliseconds 
          //hoverDate = $.datepicker.parseDate('yy-mm-dd', hoverDate); 
          hoverDate= hoverDate.split("-");
          var hoverDateArray = new Date(hoverDate[0], hoverDate[1], hoverDate[2]);
          //date01= date01.split("-");
          //var date01Array = new Date(date01[0], date01[1], date01[2]);
          console.log("hoverDate = ",hoverDate);
          console.log("date01 = ", date01);
          //date01 = $.datepicker.parseDate('yy-mm-dd', date01);
          var coloredDates = $('.ui-datepicker td');
          if (date01 <= coloredDates || coloredDates <= hoverDate) { 
            coloredDates.addClass('sejour'); 
           } else { 
            coloredDates.removeClass('sejour'); 
           } 
  
        });
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
