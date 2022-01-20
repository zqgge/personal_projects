Here is some code from the project:

package com.example.budgetkicker;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.Bundle;
import android.util.TypedValue;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import static java.lang.Integer.parseInt;

public class MainActivity extends AppCompatActivity {

    // present variables
    ImageView image, tablet, thePicture, lockedDay;
    Button payButton, changeButton, resetButton;
    TextView textView, textDay, budgetMonthView, budgetDayView, noticeWarning, noticeDoingGood;
    LinearLayout container, textContainer;
    SharedPreferences mPrefs;

    String day, iString, mString, imageString, date;
    int i, v, min, max, scale, budgetDay, budgetMonth, countTodaysBudget, imageInt, lockToday, locked;
    int budgetShouldBe, budgetLeft, budgetOver, tries;
    int[] days = new int[33];
    int[] d = new int[33];
    float budgetBydays;


    // MAIN
    @SuppressLint({"UseCompatLoadingForDrawables", "SetTextI18n"})
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // define variables
        payButton = findViewById(R.id.testButton);
        changeButton = findViewById(R.id.changeDay);
        resetButton = findViewById(R.id.resetButton);
        textView = findViewById(R.id.textView);
        textDay = findViewById(R.id.textDay);
        budgetMonthView = findViewById(R.id.budgetLeftMonth);
        budgetDayView = findViewById(R.id.budgetLeftToday);
        thePicture = findViewById(R.id.thePicture);
        container = findViewById(R.id.container);
        textContainer = findViewById(R.id.textContainer);
        tablet = findViewById(R.id.tablet);
        noticeWarning = findViewById(R.id.noticeWarning);
        noticeDoingGood = findViewById(R.id.noticeDoingGood);

        // define bar height
        scale = 30;

        // set budget
        budgetDay = 10;
        budgetMonth = budgetDay * 31;

        // define what is the amount of money that changes the color of the bar (min = yellow, max = red)
        // and max amount of money per day
        min = scale * 7;
        max = scale * budgetDay;

        // set days to 1
        i = 1;
        v = 1;

        // getting the layout ready
        container.setRotationX(180);
        thePicture.setPivotY(0);
        thePicture.setRotationX(180);
        noticeWarning.setVisibility(View.INVISIBLE);
        noticeDoingGood.setVisibility(View.INVISIBLE);
        tries = 0;


        // set the day bars and texts ready
        while (i<32)
        {

            // creates new bar image for every day in the container
            ImageView imageView = new ImageView(getApplicationContext());
            imageView.setImageDrawable(getDrawable(R.drawable.thepicture));
            container.addView(imageView);

            // names the tag to every new bar image so it can be found later
            d[i] = i;
            imageView.setTag(String.valueOf(i));

            // creates new text name for every day in the textContainer (01-31)
            days[i] = i;
            day = String.valueOf(days[i]);
            TextView dayText = new TextView(getApplicationContext());
            dayText.setX(imageView.getX());
            textContainer.addView(dayText);

            // if day is < 10 adds "0" before
            if (i<10){ dayText.setText("0"+day);}
            else{dayText.setText(day);}

            // settings to new day text
            dayText.setTextColor(Color.RED);
            dayText.setTextSize(TypedValue.COMPLEX_UNIT_PX, 28);

            // set's the text for days 01-31
            textView.setText(day);
            textView.setX(imageView.getX());

            // set's the bar images
            imageView.setPadding(14,0,15,0);
            imageView.setScaleX(9);
            imageView.setScaleY(2);
            imageView.setColorFilter(Color.GREEN);
            i++;
        }

        // load the previous save
        load();

        // show the amount of the money you have spend today
        imageString = String.valueOf((image.getScaleY()-2)/scale);
        textView.setText(imageString+" e");


        // when you click the pay button 1 euro adds up
        payButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // if today's budget is already spent spending adds up to next day and so on
                if (image.getScaleY() > max){
                    if (locked != 1){lockToday = v; locked = 1;}    // locks the day so there is no skipping
                        while (image.getScaleY()>=max){
                            dayChange(); }
                }
                tries = 0;
                // scales the bar to +1 and decides the color of the bar
                if (image.getScaleY() <max) {image.setScaleY(image.getScaleY()+scale);
                    if (image.getScaleY() > min & image.getScaleY() < max){
                        image.setColorFilter(Color.YELLOW);
                    }
                    if (image.getScaleY() >= max){
                        image.setColorFilter(Color.RED);
                    }

                    if (locked != 1) {
                        // adds the money to the amount info text
                        imageString = String.valueOf((image.getScaleY() - 2) / scale);
                        textView.setText(imageString+" e");
                        textView.setY((float) ((float) ((float) (min - image.getScaleY()) + getDisplay().getHeight() * 0.5)));
                        budgetShouldBe = v*budgetDay;
                        lockedDay = image;
                    }
                    else{budgetShouldBe = lockToday*budgetDay;}

                    // -1 from budget
                    budgetMonth -= 1;
                    // Shows the budget left
                    budgetMonthView.setText("Budget left this month: "+budgetMonth+" / "+budgetDay*31+" e");
                    imageInt = (int) ((lockedDay.getScaleY()-2)/scale);
                    countTodaysBudget = budgetDay - imageInt;
                    budgetDayView.setText("Budget left today: "+countTodaysBudget+" / "+budgetDay+" e");

                    budgetLeft = budgetDay*31-budgetMonth;
                    budgetOver = budgetDay*31-budgetMonth-budgetShouldBe;
                    budgetBydays = (float) budgetOver/10;
                    if (budgetLeft > budgetShouldBe){noticeWarning.setVisibility(View.VISIBLE);noticeWarning.setText("NOTICE: You are over your budget by " +budgetOver+"e ("+budgetBydays+" days)");
                    noticeDoingGood.setVisibility(View.INVISIBLE);}
                    else{noticeWarning.setVisibility(View.INVISIBLE);}
                    if (budgetShouldBe > budgetLeft+10){noticeDoingGood.setVisibility(View.VISIBLE);noticeDoingGood.setText("FANTASTIC: You have saved " +(budgetShouldBe-budgetLeft-10)+" e already!");}
                    else{noticeDoingGood.setVisibility(View.INVISIBLE);}

                    // saves the new amount
                    save(); }
            }
        });
        // when you click the next day button the day changes to next day
        changeButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (locked == 1){v= lockToday; locked = 0;}
                dayChange();
                // shows the amount text for the right day
                imageString = String.valueOf((image.getScaleY()-2)/scale);
                textView.setText(imageString+" e");

                budgetBydays = (float) budgetOver/10;
                budgetShouldBe = v*budgetDay;
                budgetLeft = budgetDay*31-budgetMonth;
                budgetOver = budgetDay*31-budgetMonth-budgetShouldBe;
                if (budgetLeft > budgetShouldBe){noticeWarning.setVisibility(View.VISIBLE);noticeWarning.setText("NOTICE: You are over your budget by " +budgetOver+"e ("+budgetBydays+" days)");
                    noticeDoingGood.setVisibility(View.INVISIBLE);}
                else{noticeWarning.setVisibility(View.INVISIBLE);}
                if (budgetShouldBe > budgetLeft+10){noticeDoingGood.setVisibility(View.VISIBLE);noticeDoingGood.setText("FANTASTIC: You have saved " +(budgetShouldBe-budgetLeft-10)+" e already!");}
                else{noticeDoingGood.setVisibility(View.INVISIBLE);}

                // adds "0" before the day if it is < 10
                String zero;
                if (v<10){zero = "0";} else{zero = "";}
                textDay.setText("Day: "+zero+String.valueOf(v)+new SimpleDateFormat(".MM.yyyy", Locale.getDefault()).format(new Date()));

                // moves the amount text to the right positon
                textView.setY((float) ((float) ((float) (min-image.getScaleY())+ getDisplay().getHeight()*0.5)));
                textView.setX(image.getX()+35);
                imageInt = (int) ((image.getScaleY()-2)/scale);
                countTodaysBudget = budgetDay - imageInt;
                budgetDayView.setText("Budget left today: "+countTodaysBudget+" / "+budgetDay+" e");
            }
        });
        // when you click reset button everything goes to 0
        resetButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                // goes through every day and sets the amount to 0
                v = 1;
                while (v<32){
                    iString = String.valueOf(d[v]);

                    image = container.findViewWithTag(iString);

                    image.setScaleY(2);
                    image.setColorFilter(Color.GREEN);
                    save();
                    ++v;
            }
                // sets everything up
                budgetMonth = 31*budgetDay;
                budgetMonthView.setText("Budget left this month: "+budgetMonth+" / "+budgetMonth+" e");
                v = parseInt(new SimpleDateFormat("d", Locale.getDefault()).format(new Date()));
                iString = String.valueOf(d[v]);
                image = container.findViewWithTag(iString);
                imageString = String.valueOf((image.getScaleY()-2)/scale);
                textView.setText(imageString);
                textDay.setText("Day: "+date);
                textView.setY((float) ((float) ((float) (min-image.getScaleY())+ getDisplay().getHeight()*0.5)));
                textView.setX((float) (image.getX()+30));
                noticeWarning.setVisibility(View.INVISIBLE);

            }
        });
    }

    // SAVE FUNCTION
    void save(){
        SharedPreferences.Editor mEditor = mPrefs.edit();
        mEditor.putString("tag"+String.valueOf(d[v]), String.valueOf(image.getScaleY())).apply();
    }

    // LOAD FUNCTION
    void load() {
        v = 1;
        mPrefs = getSharedPreferences("label", 0);
        while(v<32){
            mString = mPrefs.getString("tag" +String.valueOf(d[v]), "default_value_if_variable_not_found");
            iString = String.valueOf(d[v]);

            image = container.findViewWithTag(iString);
            image.setScaleY(Float.parseFloat(mString));
            textView.setText(String.valueOf(image.getScaleY()));

            if (image.getScaleY() > min & image.getScaleY() < max){
                image.setColorFilter(Color.YELLOW);
            }
            if (image.getScaleY() >= max){
                image.setColorFilter(Color.RED);
            }

            // Shows the budget left
            budgetMonth -= (image.getScaleY()-2)/scale;
            imageInt = (int) ((image.getScaleY()-2)/scale);
            countTodaysBudget = budgetDay - imageInt;


            ++v;
                    }

        // sets everything up
        v=parseInt(new SimpleDateFormat("d", Locale.getDefault()).format(new Date()));
        date = new SimpleDateFormat("dd.MM.yyyy", Locale.getDefault()).format(new Date());
        iString = String.valueOf(v);
        image = container.findViewWithTag(iString);
        textDay.setText("Day: "+date);
        textView.setY((float) (-image.getScaleY()*1.5+30));
        textView.setX((float) (-520+v*32.5));

        imageInt = (int) ((image.getScaleY()-2)/scale);
        countTodaysBudget = budgetDay - imageInt;
        budgetDayView.setText("Budget left today: "+countTodaysBudget+" / "+budgetDay+" e");
        budgetMonthView.setText("Budget left this month: "+budgetMonth+" / "+budgetDay*31+" e");

        budgetBydays = (float) budgetOver/10;
        budgetShouldBe = v*budgetDay;
        budgetLeft = budgetDay*31-budgetMonth;
        budgetOver = budgetDay*31-budgetMonth-budgetShouldBe;
        if (budgetLeft > budgetShouldBe){noticeWarning.setVisibility(View.VISIBLE);noticeWarning.setText("NOTICE: You are over your budget by " +budgetOver+"e ("+budgetBydays+" days)");
            noticeDoingGood.setVisibility(View.INVISIBLE);}
        else{noticeWarning.setVisibility(View.INVISIBLE);}
        if (budgetShouldBe > budgetLeft+10){noticeDoingGood.setVisibility(View.VISIBLE);noticeDoingGood.setText("FANTASTIC: You have saved " +(budgetShouldBe-budgetLeft-10)+" e already!");}
        else{noticeDoingGood.setVisibility(View.INVISIBLE);}
    }

    void dayChange(){
        // day is day+1
        v += 1;

        // if day goes over 31, it changes to 1
        if (v>31){v=1;}

        // finds the right bar image from the container
        iString = String.valueOf(d[v]);
        image = container.findViewWithTag(iString);

    }
    }
