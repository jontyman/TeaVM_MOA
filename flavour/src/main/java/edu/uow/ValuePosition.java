package edu.uow;
import java.util.Arrays;

public class ValuePosition {
    private String[] value;
    private int position;

    public ValuePosition(String[] value, int position) {
        this.value = value;
        this.position = position;
    }

    public String[] getValue() {
        return value;
    }

    public int getPosition() {
        return position;
    }

}