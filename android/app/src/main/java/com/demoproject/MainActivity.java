package com.demoproject;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.demoproject.activities.AsyncDemoActivity;
import com.demoproject.activities.CitiesActivity;
import com.demoproject.activities.CounterActivity;
import com.demoproject.activities.CounterReduxActivity;
import com.demoproject.activities.HotelsActivity;
import com.demoproject.activities.ListActivity;

public class MainActivity extends Activity {


    private RecyclerView recyclerView;
    private RecyclerView.Adapter mAdapter;
    private RecyclerView.LayoutManager layoutManager;
    private String[] myDataset = {"Demo1-Counter", "Demo1.1-Counter-Redux","Demo2-ListView","Demo3-CityList","Demo4-Hotels","Demo5-Async"};

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        recyclerView = (RecyclerView) findViewById(R.id.main_list);

        // use this setting to improve performance if you know that changes
        // in content do not change the layout size of the RecyclerView
        recyclerView.setHasFixedSize(true);

        // use a linear layout manager
        layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

        final Class<? extends Activity>[] clazzArray = new Class[]{CounterActivity.class,
                CounterReduxActivity.class,
                ListActivity.class,
                CitiesActivity.class,
                HotelsActivity.class,
                AsyncDemoActivity.class};
        mAdapter = new MyAdapter(myDataset, new OnItemClickListener() {
            @Override
            public void onItemClick(int position) {
                Intent intent = new Intent(MainActivity.this, clazzArray[position]);
                startActivity(intent);
            }
        });
        recyclerView.setAdapter(mAdapter);
    }


    interface OnItemClickListener {
        void onItemClick(int position);
    }

    private class MyAdapter extends RecyclerView.Adapter<MyAdapter.MyViewHolder> {

        private String[] mDataset;
        private OnItemClickListener itemClickListener;

        // Provide a reference to the views for each data item
        // Complex data items may need more than one view per item, and
        // you provide access to all the views for a data item in a view holder
        public class MyViewHolder extends RecyclerView.ViewHolder {
            // each data item is just a string in this case
            public TextView textView;

            public MyViewHolder(View v) {
                super(v);
                textView = v.findViewById(R.id.textView);

            }
        }

        // Provide a suitable constructor (depends on the kind of dataset)
        public MyAdapter(String[] myDataset, OnItemClickListener listener) {
            mDataset = myDataset;
            itemClickListener = listener;
        }

        // Create new views (invoked by the layout manager)
        @Override
        public MyAdapter.MyViewHolder onCreateViewHolder(ViewGroup parent,
                                                         int viewType) {
            // create a new view
            View v = LayoutInflater.from(parent.getContext())
                    .inflate(R.layout.item_main_list, parent, false);

            MyViewHolder vh = new MyViewHolder(v);

            return vh;
        }

        // Replace the contents of a view (invoked by the layout manager)
        @Override
        public void onBindViewHolder(MyViewHolder holder, int position) {
            // - get element from your dataset at this position
            // - replace the contents of the view with that element
            holder.textView.setText(mDataset[position]);
            holder.textView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    itemClickListener.onItemClick(position);
                }
            });

        }

        // Return the size of your dataset (invoked by the layout manager)
        @Override
        public int getItemCount() {
            return mDataset.length;
        }
    }


}
