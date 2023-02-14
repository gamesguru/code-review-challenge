import uuid
import geopandas as gpd
from shapely.geometry import Point, box
import random


def fake_data_setup(number_records: int = 10000) -> None:
    """
    Creates a geodataframe with some fake data in it for testing purposes
    :param number_records: Number of records to include in the geodataframe
    """
    colors = ['red', 'orange', 'blue', 'magenta', 'magenta', 'magenta']

    df = gpd.GeoDataFrame([
        {
            'geometry': Point(random.uniform(-180, 180), random.uniform(-90, 90), random.uniform(0, 1500)),
            'id': uuid.uuid4(),
            'color': random.choice(colors),
            'row': i
        }
        for i in range(number_records)
    ])
    df.to_csv('demo_data.csv', index=False)


if __name__ == '__main__':
    fake_data_setup(10_000_000)
